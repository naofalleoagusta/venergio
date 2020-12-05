import React/*, { useState }*/ from 'react';
import { useMutation } from '@apollo/client';
import { MUTATION_ADD_CONTACT } from "../gql/contact";
import Swal from 'sweetalert2';
import "./ContactForm.css";
function ContactForm({ isHome }) {
    let desc, name, email, subject = "";
    const [addContact] = useMutation(MUTATION_ADD_CONTACT);
    return (
        <>
            <div className="container mb-5" id="getstarted">
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Hubungi Kami</h2>
                    </div>
                    <div className={isHome ? "col-lg-8" : "col-12"}>
                        <form onSubmit={e => {
                            e.preventDefault();
                            addContact(
                                {
                                    variables: {
                                        nama: name.value,
                                        email: email.value,
                                        desc: desc.value,
                                        subject: subject.value
                                    }
                                }
                            ).then(
                                () => {
                                    Swal.fire({
                                        title: '<strong>Terimakasih Telah Mengisi Form Kami</strong>',
                                        icon: 'success',
                                        html:
                                            'Terimakasih telah mengisi form Kami ! Kami akan segera menanggapi pesan Anda!',
                                        showCloseButton: true,
                                        showCancelButton: false,
                                        focusConfirm: false,
                                        confirmButtonColor: '#2c546c',
                                        confirmButtonAriaLabel: 'Thumbs up, great!'
                                    })

                                }
                            ).catch(
                                e => {
                                    console.log(e)
                                    Swal.fire({
                                        title: '<strong>Oops..Telah terjadi kesalahan</strong>',
                                        icon: 'error',
                                        html:
                                            'Mohon untuk mengecek kembali koneksi anda dan mencoba mengisi ulang form kami!',
                                        showCloseButton: true,
                                        showCancelButton: false,
                                        focusConfirm: false,
                                        confirmButtonColor: '#2c546c',
                                        confirmButtonAriaLabel: 'Thumbs up, great!'
                                    })
                                }
                            );
                            desc.value = '';
                            name.value = '';
                            email.value = '';
                            subject.value = '';
                        }}
                            className="form-contact contact_form"
                            id="contactForm"
                            noValidate="noValidate"
                        >
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea
                                            ref={node => {
                                                desc = node;
                                            }}
                                            className="form-control w-100"
                                            name="message"
                                            id="message"
                                            cols="30"
                                            rows="9"
                                            placeholder="Masukkan Pesan/Pertanyaan Anda Disini"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input
                                            ref={node => {
                                                name = node;
                                            }}
                                            className="form-control valid"
                                            name="name"
                                            id="name"
                                            type="text"
                                            placeholder="Masukkan Nama Anda Disini"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input
                                            ref={node => {
                                                email = node;
                                            }}
                                            className="form-control valid"
                                            name="email"
                                            id="email"
                                            type="email"
                                            placeholder="Masukkan Email Anda Disini"
                                            required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input
                                            ref={node => {
                                                subject = node;
                                            }}
                                            className="form-control"
                                            name="subject"
                                            id="subject"
                                            type="text"
                                            placeholder="Masukkan Subyek Anda Disini"
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button
                                    type="submit"
                                    className="button boxed-btn3">
                                    Kirim
                                </button>
                            </div>
                        </form>
                    </div>
                    {isHome ?
                        <>
                            <div className="col-lg-3 offset-lg-1">
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="fas fa-home"></i></span>
                                    <div className="media-body">
                                        <h3>128 Bawen 26/06 Kotagede</h3>
                                        <p>Yogyakarta 55173</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="fas fa-tablet"></i></span>
                                    <div className="media-body">
                                        <h3>088225111268</h3>
                                        <p>Senin sampai Jumat 9 Pagi - 6 Malam</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="far fa-envelope"></i></span>
                                    <div className="media-body">
                                        <h3>cs@venergio.com</h3>
                                        <p>Tanyakan pertanyaan Anda kepada kami kapanpun!</p>
                                    </div>
                                </div>
                            </div>
                        </>:""}
                </div>
            </div>
        </>
    );
}

export default ContactForm;