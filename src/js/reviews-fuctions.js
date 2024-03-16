import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getReviews } from './api';
import { renderReviewsList } from './render';

const reviewsList = document.querySelector('.reviews-list');
const errorNotification = document.querySelector('.reviews-error');
const reviewsSwiper = document.querySelector('.reviews-btn-wrapper');

export default buildReviews();

async function buildReviews() {
  try {
    const data = await getReviews();
    renderReviewsList(data, reviewsList);
    reviewsSwiper.classList.remove('hidden');
  } catch (error) {
    reviewsList.classList.add('hidden');
    errorNotification.classList.remove('hidden');

    iziToast.show({
      message: 'Sorry, something went wrong. The reviews are not available',
      messageColor: '#fafafb',
      messageSize: '16px',

      position: 'topRight',
      backgroundColor: '#ef4040',
    });
  }
}
