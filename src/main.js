"use strict";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
//* = = = =

import { getPhoto } from './js/pixabay-api'
import { symbolTemplate } from './js/render-functions';

export const form = document.querySelector('.search-form');
export const imgGallery = document.querySelector('.gallery');

export let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// do something…
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userSearch = form.elements.query.value.trim();
    imgGallery.innerHTML = '<div class="loader"></div>';

    if (userSearch === '') {
         iziToast.error({
        color: 'red',
        position: 'topRight',
        message: `Fill in the input!`,
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
                const markup = symbolTemplate(data.hits);
                imgGallery.insertAdjacentHTML("beforeend", markup);
                gallery.refresh();
                e.target.reset();
                //  const lightbox = new SimpleLightbox('.gallery a', {
                // captionsData: 'alt',
                //  });
            }
        })
        .catch(error => {
            iziToast.error({
                maxWidth: '432px',
                height: '48px',
                color: 'red',
                position: 'topRight',
                message: "Sorry, a technical error has occurred!",
            });
        });
    }
     imgGallery.innerHTML = "";
});