"use strict";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
//* = = = =

import { getPhoto } from './js/pixabay-api'
import { symbolTemplate } from './js/render-functions';

export const form = document.querySelector('.search-form');
export const gallery = document.querySelector('.gallery');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userSearch = form.elements.query.value;
    if (userSearch === '') {
         iziToast.error({
        color: 'red',
        position: 'topRight',
        message: `Будь ласка введіть дані!`,
      });
    } else {
        getPhoto(userSearch).then(data => {
            if (data.total === 0) {
                iziToast.error({
                    color: 'red',
                    position: 'topRight',
                    message: `"Sorry, there are no images matching your search query. Please try again!"`,
                });
                 e.target.reset();
            } else {
                gallery.innerHTML = "";
                const markup = symbolTemplate(data.hits);
                gallery.insertAdjacentHTML("beforeend", markup);
                e.target.reset();

                const galleryBig = new SimpleLightbox('.gallery a', {
                    captionsData: 'alt',
                    captionDelay: 250,
                });
                
            }
        });
    }
});