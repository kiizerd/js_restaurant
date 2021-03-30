const Display = (function() {
  function getAboutPage() {
    const div = document.createElement('div');
    div.classList.add('container-fluid');

    div.append(getDescription(), getContact());

    return div
  }

  function createCard() {
    const card = document.createElement('div');
    card.classList.add('card', 'about-cards');
   
    card.header = document.createElement('div');
    card.header.classList.add('card-header');
    
    card.body = document.createElement('div');
    card.body.classList.add('card-body');

    card.append(card.header, card.body);

    return card
  }

  function getDescription() {
    const div = createCard();

    div.header.textContent = 'About us'
    
    const descCard = getDescCard();
    
    div.body.append(descCard);

    function getDescCard() {
      const descCard = document.createElement('div');
      descCard.classList.add('card', 'mb-2', 'text-white', 'bg-dark');
      
      const cardText = getDescCardText();
       
      descCard.append(cardText);

      function getDescCardText() {
        const text = document.createElement('p');
        text.id = 'description-card';
        text.classList.add('card-text');
        text.textContent = 
        'We are a proud family-run establishment that has been in town' +
        " for more than 30 years. \n" +
        'People all around know us as the premiere place to have a' +
        " high-class meal for a medium-high-class price. \n" +
        'Our founder, Benecio del Toro, fought off hordes of starving' +
        ' orphans to fulfill his dream of creating the best restaurant' +
        " the world has ever seen. \n" +
        'To enter our culinary haven and dine upon our meals is to be one' +
        ' with the universe and all of your ancestors that came before.'

        return text
      }

      return descCard
    }

    return div
  }

  function getContact() {
    const div = createCard();

    div.header.textContent = 'Contact info'

    const contactCard = getContactCard()

    div.body.append(contactCard);

    function getContactCard() {
      const contactCard = document.createElement('div');
      contactCard.classList.add('card', 'mb-2', 'text-white', 'bg-dark');

      contactCard.list = getContactList();

      contactCard.append(contactCard.list);

      function getContactList() {
        const list = document.createElement('ul');
        list.classList.add('list-group','list-group-flush');

        const emailItem = getListItem('email');
        const numberItem = getListItem('num');
        const socialItem = getListItem('social');
        const commentItem = getListItem('comment');

        list.append(emailItem, numberItem, socialItem, commentItem)
        return list;
      }

      function getListItem(itemName) {
        const item = document.createElement('li');
        item.classList.add('list-group-item', 'bg-dark', 'p-3');

        let contactItem;
        if (itemName === 'email')  contactItem = getContactEmail();
        else if (itemName === 'num') contactItem = getContactNum();
        else if (itemName === 'social') contactItem = getContactSocial();
        else if (itemName === 'comment') contactItem = getCommentForm();

        item.append(contactItem);

        return item
      }

      return contactCard;
    }

    function getCommentForm() {
      const form = document.createElement('form');
      const subject = getCommentSubject();

      function getCommentSubject() {
        const div = document.createElement('div');
        div.classList.add('form-floating', 'text-dark', 'mb-1', 'mt-1');

        const input = document.createElement('input');
        input.classList.add('form-control');
        input.type = 'text';
        input.placeholder = 'Compliments / Complaints';
        input.id = 'comment-subject-input';

        const label = document.createElement('label');
        label.for = 'comment-subject-input';
        label.textContent = 'Subject';

        div.append(input, label);

        return div
      }

      const textArea = getCommentTextArea();

      function getCommentTextArea() {
        const div = document.createElement('div');
        div.classList.add('form-floating', 'text-dark', 'mt-1', 'mb-1');

        const input = document.createElement('textarea');
        input.classList.add('form-control');
        input.placeholder = 'Leave a comment here';
        input.id = 'comment-textarea';
        
        const label = document.createElement('label');
        label.for = 'comment-textarea';
        label.textContent = 'Comments';

        div.append(input, label);

        return div
      }

      const submitBtn = getSubmitBtn();

      function getSubmitBtn() {
        const btn = document.createElement('button');
        btn.type = 'submit'
        btn.classList.add('btn', 'btn-primary')
        btn.textContent = 'Submit';
        btn.onclick = false;

        return btn
      }
      
      form.append(subject, textArea, submitBtn);
      form.onsubmit = false

      return form
    }
    
    return div
  }

  function getContactEmail() {
    const div = document.createElement('div');

    const email = document.createElement('span');
    email.classList.add('fa', 'fa-envelope');
    email.textContent = "\t|\tbest_restaurant@food.io";

    div.append(email);
    return div
  }

  function getContactNum() {
    const div = document.createElement('div');

    const number = document.createElement('span');
    number.classList.add('fa', 'fa-phone');
    number.textContent = '\t|\t978-555-4321';

    div.append(number);

    return div
  }

  function getContactSocial() {
    const div = document.createElement('div');

    const fbIcon = document.createElement('span');
    fbIcon.classList.add('fa', 'fa-facebook', 'me-2');

    const twitterIcon = document.createElement('span');
    twitterIcon.classList.add('fa', 'fa-twitter', 'ms-2', 'me-1');

    const linkedInIcon = document.createElement('span');
    linkedInIcon.classList.add('fa', 'fa-linkedin', 'ms-2', 'me-1');

    const shareIcon = document.createElement('span');
    shareIcon.classList.add('fa', 'fa-share-alt', 'ms-2');

    div.append(fbIcon, twitterIcon, linkedInIcon, shareIcon);

    return div
  }

  return { getAboutPage }
})()

const getAboutPage = Display.getAboutPage

export { getAboutPage }