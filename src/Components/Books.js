import React from 'react'
import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from 'react';
import {LibraryContext} from './LibraryContext'

export default function Books () {
        const {catalogue, add} = useContext(LibraryContext);
        return (
          <>
          <h1 className="text-center mt-3">Libros Disponibles</h1>
        <section classNanme="py-4 container">
            <div className="row justify-content-center">
                {catalogue.map((l, i)=>{
                    return(
                      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                      <div class="card p-0 overflow-hidden h-100 shadow">
                          <img src={l.img} class="card-img-top img-fluid"/>
                              <div class="card-body text-center">
                                  <h5 class="card-title">{l.code}</h5>
                                  <h5 class="card-title">{l.title}</h5>
                                  <p class="card-text">{l.lenguage}</p>
                                  <Button variant="dark" disabled={l.disabled} onClick={()=>add(l)}>Agregar</Button>
                              </div>
                      </div>
                  </div>
                    )
                })}
                
            </div>
        </section>
          </>
        )
}

