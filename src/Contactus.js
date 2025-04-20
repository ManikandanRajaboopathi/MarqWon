import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import countries from './country.json'


function Contact(){
    const form = useRef();
    
      const [errors, setErrors] = useState({});
    
      const validate = (data) => {
        const errors = {};
        if (!data.name) errors.name = "Name is required";
        if (!data.email) {
          errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
          errors.email = "Invalid email address";
        }
        if (!data.phone) {
          errors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(data.phone)) {
          errors.phone = "Phone must be 10 digits";
        }
        if (!data.message) errors.message = "Message is required";
        return errors;
      };
    const sendEmail = (e) => {        
        e.preventDefault();
        const data = {
            name: form.current.name.value,
            email: form.current.email.value,
            phone: form.current.phone.value,
            message: form.current.message.value,
          };
      
          const validationErrors = validate(data);
          setErrors(validationErrors);
          if (Object.keys(validationErrors).length === 0) {
              emailjs
                .sendForm(
                  'service_luvlw1w',   
                  'template_hq3iqws',
                  form.current,
                  'CdSm89bnj-g5jc-7g'
                )
                .then(
                  (result) => {
                    console.log('Email sent:', result.text);
                    alert('Message sent successfully!');
                    form.current.reset();
                  },
                  (error) => {
                    console.error('Error:', error.text);
                    alert('Failed to send message. Please try again.');
                  }
                );
          }
      };
    return(
        <>
        <section className="contactusbg">
         <div className="container">
             <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className="form-wrapper">
                    <h1 className="fw-bold text-center">Let's Start a <span className="text-theme">Conversation</span> </h1>
                  <form ref={form} onSubmit={sendEmail}  className="d-flex flex-column gap-4 mt-5">
                    <span className="d-block">
                        <input type="text" className="form-control" name='name' placeholder="Name"/>
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                    </span>
                    <span className="d-block">
                    <div class="input-group gap-4">
                    <span class="input-group-text p-0 border-0" id="basic-addon1">
                    <select className="form-select" name="country_code">
                    {countries.map((country, index) => (
                        <option key={index} value={country.dial_code}>
                        {country.dial_code} ({country.name})
                        </option>
                    ))}
                    </select>
                        {/* <select className="form-select border-0">
                            <option value={1}>+91</option>
                        </select> */}

                    </span>
                    <input type="number" name='phone' class="form-control" placeholder="Mobile Number" aria-label="Username" aria-describedby="basic-addon1"/>

                    </div>
                    {errors.phone && <small className="text-danger">{errors.phone}</small>}
                    </span>
                    <span className="d-block">
                        <input type="email" className="form-control" name='email' placeholder="Email"/>
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                    </span>
                    <span className="d-block">
                        <textarea className="form-control" name='message' placeholder="Type your business requirements here..."></textarea>
                        {errors.message && <small className="text-danger">{errors.message}</small>}
                    </span>
                    <span className="d-block text-end">
                    <button class="btn-reverse btn-arrow">
                        <span>Contact
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                      </svg>
                          </span>
                      </button>
                    </span>
                  </form>
                    </div>
                </div>
             </div>
         </div>
        </section>
        </>
    )
}

export default Contact