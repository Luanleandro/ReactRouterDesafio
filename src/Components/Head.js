const Head = (props) => {
  document.title = props.title;
  document
    .querySelector("meta[name='description']")
    .setAttribute('content', props.description);
};

export default Head;
