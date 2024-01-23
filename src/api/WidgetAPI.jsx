import createRequest from './CreateRequest';

export class WidgetAPI {
   constructor(url) {
      this.url = url;
   }

   load(callback) {
      createRequest({
      url: `${this.url}/users.json`,
      method: 'GET',
      callback: (status, response) => {
         if (status) {
            callback(null, response);
         } else {
            alert('Ошибка!');
         }
      }
   })}

   choose(callback, id) {
      createRequest({
      url: `${this.url}/${id}.json`,
      method: 'GET',
      callback: (status, response) => {
         if (status) {
            callback(null, response);
         } else {
            alert('Ошибка!');
         }
      }
   })}
}