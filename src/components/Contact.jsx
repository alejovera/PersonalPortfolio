import React, {useState} from 'react';
import { db } from '../firebase';
import { Alert, AlertTitle } from '@material-ui/lab';
import './styles/Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
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

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('contacts')
            .add({
                name: name,
                email: email,
                message: message,
            })
            .then(
                alert('Formulario enviado')
            )
        setName('')
        setEmail('')
        setMessage('')
    }
    
    return(
        <>
            <h3 className='contactTitle'>Contáctame</h3>
            <form className='needs-validation contact-form' onSubmit={handleSubmit} noValidate>
                <div className='form-row'>
                    <div className='name-row mb-2'>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="validationCustom01" placeholder='Nombre' required />
                        <div className="invalid-feedback">
                            Porfavor ingrese un nombre valido.
                        </div>
                    </div>
                    <div className="email-row mb-2">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control needs-validation" id="validationCustom02" placeholder="email" required />
                            <div className="invalid-feedback">
                                Porfavor ingrese un email valido.
                            </div>
                    </div>
                </div>
                <div className='form-row text-row'>
                    <div className='col-12 form-text pl-0'>
                        <textarea className="form-control needs-validation" value={message} onChange={(e) => setMessage(e.target.value)} id="validationTextarea" placeholder="Escriba su mensaje aqui" required></textarea>
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