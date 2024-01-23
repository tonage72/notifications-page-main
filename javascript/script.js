const markAllRead = document.querySelector('.mark-all-read');
const allCardUnread = document.querySelectorAll('.card-unread');

markAllRead.addEventListener("click", markRead);

function markRead() {
	for (var i = 0; i < allCardUnread.length; i++) {
		allCardUnread[i].classList.toggle('card-unread');
	}
}