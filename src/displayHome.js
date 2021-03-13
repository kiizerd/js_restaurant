const getContent = function() {
  content = document.getElementById('content');

  getHeader = () => {
    const header = document.createElement('div');
    header.classList.add('header')

    return header
  };

  getBody = () => {
    const body = document.createElement('div');

    return body
  };

  content.append(getHeader(), getBody())

  return content
};

export { getContent }