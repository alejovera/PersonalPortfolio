import React from 'react';
import './styles/Contact.css';

const Contact = () => {
    (function() {
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })()
    
    return(
        <>
            <h3 className='contactTitle'>Contáctame</h3>
            <form className='needs-validation contact-form' noValidate>
                <div className='form-row'>
                    <div className='name-row mb-2'>
                        <input type="text" className="form-control" id="validationCustom01" placeholder='Nombre' required />
                        <div className="invalid-feedback">
                            Porfavor ingrese un nombre valido.
                        </div>
                    </div>
                    <div className="email-row mb-2">
                        <input type="email" className="form-control needs-validation" id="validationCustom02" placeholder="email" required />
                            <div className="invalid-feedback">
                                Porfavor ingrese un email valido.
                            </div>
                    </div>
                </div>
                <div className='form-row text-row'>
                    <div className='col-12 form-text pl-0'>
                        <textarea className="form-control needs-validation" id="validationTextarea" placeholder="Escriba su mensaje aqui" required></textarea>
                        <div className="invalid-feedback">
                            Porfavor escriba un mensaje valido.
                        </div>                    
                    </div>
                </div>
                <div className="form-row button-row">
                    <div className='col-3'>
                        <button className="btn btn-warning btn-form" type="submit">Enviar mensaje</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Contact;