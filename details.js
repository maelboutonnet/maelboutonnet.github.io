function detail(item) {
  item.parentElement.getElementsByClassName('detail')[0].classList.toggle('hidden');
  item.children[0].classList.toggle('fa-plus-square');
  item.children[0].classList.toggle('fa-minus-square');
}
