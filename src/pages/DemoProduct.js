import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
import axios from 'axios';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const DemoProduct = (props) => {

    useDocTitle('MLD | Molad e Konsult - Demo our products')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [demoProducts, setDemoProducts ] = useState([])
    const [errors, setErrors] = useState([])


    const handleChange = (e) => {
        const value = e.target.value
        const checked = e.target.checked
        errors.products = []
        if(checked) {
            setDemoProducts([
                ...demoProducts, value
            ])
        } else {
            setDemoProducts(demoProducts.filter( (e) => (e !== value )))
        }
       
    }
    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }
    
    function sendEmail(e) {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
        let fData = new FormData();
        fData.append('first_name', firstName)
        fData.append('last_name', lastName)
        fData.append('email', email)
        fData.append('phone_number', phone)
        fData.append('message', message)
        fData.append('products', demoProducts)

        // emailjs.sendForm('service_7uy4ojg', 'template_et9wvdg', e.target, 'user_uE0bSPGbhRTmAF3I2fd3s')
        //   .then((result) => {
        //       console.log(result.text);
        //       Notiflix.Report.success(
        //         'Success',
        //         '"Thanks for sending a message, we\'ll be in touch soon."',
        //         'Okay',
        //         );
        //   }, (error) => {
        //       console.log(error.text);
        //       Notiflix.Report.failure(
        //         'An error occured',
        //         'Please try sending the message again.',
        //         'Okay',
        //         );
        //   });

        axios({
            method: "post",
            url: process.env.REACT_APP_DEMO_REQUEST_API,
            data: fData,
            headers: {
                'Content-Type':  'multipart/form-data'
            }
        })
        .then(function (response) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'send message';
            clearInput()
            //handle success
            Notiflix.Report.success(
                'Success',
                response.data.message,
                'Okay',
            );
        })
        .catch(function (error) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'send message';
            //handle error
            const { response } = error;
            if(response.status === 500) {
                Notiflix.Report.failure(
                    'An error occurred',
                    response.data.message,
                    'Okay',
                );
            }
            if(response.data.errors !== null) {
                setErrors(response.data.errors)
            }
            
        });
    }
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='demo' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail} id="demoProductForm">
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <p className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Doe para a nossa instituição</p>
                            </div>
                            <div style={{'padding': '30px 0px'}}>
                            <p style={{'fontWeight': 'bold', 'padding': '30px 0px', 'marginLeft': '-20px', 'fontSize': '1.4rem'}}>Por que doar para a COMP+?</p>
                            
                            <ul style={{'listStyleType': 'inherit', 'marginLeft:': '20px'}}>
                                <li>Impacto direto: Sua doação fortalece projetos que fomentam a pesquisa, o desenvolvimento e a inovação em instituições de referência.</li>
                                <li>Transparência e eficiência: Seguimos rigorosamente os princípios de legalidade, moralidade, publicidade e eficiência em todos os nossos processos.</li>
                                <li>Inovação que transforma: Contribua para projetos que fazem a diferença no progresso científico e tecnológico do Brasil.</li>
                            </ul>
                            
                            <p style={{'padding': '30px 0px'}}>Seja parte desta missão e ajude a criar um futuro mais inovador e promissor. Cada doação faz a diferença!</p>
                            <p style={{'padding': '0px 0px'}}>Doe agora e ajude a ciência a avançar!</p>

                          
                            </div>
                            <div className="flex items-center my-4">
                                <input 
                                    id="checkbox-1" 
                                    aria-describedby="checkbox-1" 
                                    type='radio'
                                    name="donationType"
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" 
                                    value="business_management_system" onChange={handleChange}
                                 />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">Doações únicas</label>
                            </div>
                            <div className="flex items-center my-4">
                                <input 
                                    id="checkbox-1" 
                                    aria-describedby="checkbox-1" 
                                    type='radio'
                                    name="donationType"
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                                    value="school_management_portal" onChange={handleChange}
                                    />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">Doações mensais</label>
                            </div>
                            <div className="flex items-center my-4">
                                <input 
                                    id="checkbox-1" 
                                    aria-describedby="checkbox-1" 
                                    type='radio'
                                    name="donationType"
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" 
                                    value="payroll_management_system" onChange={handleChange}
                                />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">Doações corporativas</label>
                            </div>
                            {errors && 
                                <p className="text-red-500 text-sm">{errors.products}</p>
                            }

                        
                        <div className="" style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
                            <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-300 
                                    focus:outline-none focus:shadow-outline">
                                Fazer Doação
                            </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>


    )
}

export default DemoProduct;