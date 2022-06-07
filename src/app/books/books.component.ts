import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ApiService } from '../api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignUpModalComponent } from '../modals/sign-up-modal/sign-up-modal.component';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { debounceTime, fromEvent, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formControls!: ElementRef[];
  @ViewChild('closebutton') closebutton!:any;

  bookDetails: any;
  modalData: any = {}
  formObj!: {};
  userForm!: FormGroup;
  message: { [key: string]: string } = {};
  status!: string;

  private validationMessages!: {
    [key: string]: { [key: string]: string | { [key: string]: string } };
  };
  constructor(private apiService:ApiService, private fb: FormBuilder) { 
    this.validationMessages = {
      firstName: {
        required: "Please enter your first name"
      },
      lastName: {
        required: "Please enter your last name"
      },
      email: {
        required: "Please enter your Email",
        email: "Please enter a valid email password"
      },
      lineOne: {
        required: "Please enter your address line one",
      },
      lineTwo: {
        required: "Please enter your address line two",
      },
      city: {
        required: "Please enter your city",
      },
      state: {
        required: "Please enter your state",
      },
      country: {
        required: "Please enter your country",
      }
    };
  }

  ngAfterViewInit(): void {
    const addBlurs: Observable<
      any
    >[] = this.formControls.map((formControl: ElementRef) =>
      fromEvent(formControl.nativeElement, 'blur')
    );
    merge(this.userForm.valueChanges, ...addBlurs)
      .pipe(debounceTime(500))
      .subscribe((value) => {
        this.message = this.invalidInputs(
          this.userForm
        );
      });
  }

  ngOnInit(): void {
    this.getBookdetails(true);
    
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]],
      address: this.fb.group({
        lineOne: ['', Validators.required],
        lineTwo: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
      }),
    });

    // this.userForm.valueChanges.subscribe(
    //   () => {
    //    const { dirty, pristine, valid, errors, invalid, value } = this.userForm;
    //    this.status = JSON.stringify({ dirty, pristine, valid, errors, invalid, value })
    //   }
    // )
  }

  getBookdetails = (type: Boolean) =>{
      this.apiService
      .getBookDetail(type)
      .subscribe((data: any) => {
        console.log(data);
        this.bookDetails = data;
      });

  }

  setData(bookData:any){
    this.modalData.title = bookData.bookName
    this.modalData.id = bookData._id
  }


  invalidInputs(formgroup: FormGroup): { [key: string]: string } {
    let messages:any = {};
    for (const input in formgroup.controls) {
        const key = formgroup.controls[input];
        if (key instanceof FormGroup) {
          const nestedGroupMessages = this.invalidInputs(key);
          Object.assign(messages, nestedGroupMessages)
        } else {
          if (this.validationMessages[input]) {
            messages[input] = '';
            if (key.errors && (key.dirty || key.touched)) {
              Object.keys(key.errors).map(messageKey => {
                if (this.validationMessages[input][messageKey]) {
                  messages[input] = this.validationMessages[input][messageKey];
                }
              });
          }
        }
      }
    }
    return messages;
  }



  onSubmit() {
    let { formObj } = this;
    let { value } = this.userForm;
    value.orderId = this.modalData.id
    try {
      this.apiService
      .CreateCustomerOrder(value)
      .subscribe((data: any) => {
        console.log(data);
        this.bookDetails = data;
      });
      this.userForm.reset()
      this.closebutton.nativeElement.click();
    } catch {
      (e:any) => console.log(e);
    }
  }
}

