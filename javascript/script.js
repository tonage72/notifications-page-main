const markAllRead = document.querySelector('.mark-all-read');
const allCardUnread = document.querySelectorAll('.card-unread');
const countNumber = document.querySelector('.count');
let mark = 1;

markAllRead.addEventListener("click", markRead);
let currentCount = allCardUnread.length;
countNumber.textContent = allCardUnread.length;

function markRead() {
	
	if (mark == 2) {
		markAllRead.textContent = "Mark all as read";
		countNumber.textContent = currentCount;
		mark = 1;
	} else {
		markAllRead.textContent = "Undo";
		countNumber.textContent = currentCount - allCardUnread.length;
		mark = 2;
	}

	for (var i = 0; i < allCardUnread.length; i++) {
		allCardUnread[i].classList.toggle('card-transform');
		allCardUnread[i].classList.toggle('card-unread');
	}

	
	
	setTimeout (clearClass, 1000);
}

function clearClass() {
	for (var i = 0; i < allCardUnread.length; i++) {
		allCardUnread[i].classList.remove('card-transform');
	}
}