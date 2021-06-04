"use strict";

let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}

let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}

let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}
let isMobile = {
	Android: function () {
		 return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		 return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		 return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		 return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		 return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		 return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
let quantityButtons = document.querySelectorAll(".quantity__button");

if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function(e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1;
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}
//BuildSlider


let sliders = document.querySelectorAll("._swiper");

if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-build')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement("div");
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = "";
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-build');
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_build_callback();
}

function sliders_build_callback() { }

if (document.querySelector('.mainslider')) {
	let mainslider = new Swiper('.mainslider__body', {
		// effect: 'fade',
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,
		// touchRatio: 0,
		// simulateTouch: false,
		loop: true,
		// preloadImages: false,
		// lazy: true,
		// Dotts
		pagination: {
			el: '.mainslider__dotts',
			clickable: true,
		},
		// Arrows

		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 0,
		// 		autoHeight: true,
		// 	},
		// 	768: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20,
		// 	},
		// 	992: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 20,
		// 	},
		// 	1268: {
		// 		slidesPerView: 4,
		// 		spaceBetween: 30,
		// 	},
		// },
		on: {
			lazyImageReady: function () {
				ibg();
			},
		},
		// And if we need scrollbar
		// scrollbar: {
		// 	el: ".swiper-scrollbar",
		// },
	})
	let mainsliderImages = document.querySelectorAll(".mainslider__image");
	let mainsliderDotts = document.querySelectorAll(".mainslider__dotts .swiper-pagination-bullet");

	for (let index = 0; index < mainsliderDotts.length; index++) {
		const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');

		mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
	}
}

if (document.querySelector('.products-slider')) {
	let productsSlider = new Swiper('.products-slider__body', {
		// effect: 'fade',
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,
		// touchRatio: 0,
		// simulateTouch: false,
		loop: true,
		// preloadImages: false,
		// lazy: true,
		navigation: {
			nextEl: '.products-slider__arrow_next',
			prevEl: '.products-slider__arrow_prev',
		},
		pagination: {
			el: ".products-slider__info",
			type: "fraction",
		},
		on: {
			lazyImageReady: function () {
				ibg();
			},
		},
		// And if we need scrollbar
		// scrollbar: {
		// 	el: ".swiper-scrollbar",
		// },
	})
}
if (document.querySelector('.brands-slider')) {
	let brandsSlider = new Swiper('.brands-slider__body', {
		// effect: 'fade',
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 600,
		// touchRatio: 0,
		// simulateTouch: false,
		loop: true,
		// preloadImages: false,
		// lazy: true,
		navigation: {
			nextEl: '.brands-slider__arrow_next',
			prevEl: '.brands-slider__arrow_prev',
		},
		// pagination: {
		// 	el: ".products-slider__info",
		// 	type: "fraction",
		// },
		breakpoints: {
			320: {
				slidesPerView: 1,
				autoHeight: true,
			},
			480: {
				slidesPerView: 2,
			},
			660: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1170: {
				slidesPerView: 5,
			},
		},
		on: {
			lazyImageReady: function () {
				ibg();
			},
		},
		// And if we need scrollbar
		// scrollbar: {
		// 	el: ".swiper-scrollbar",
		// },

	})
}
if (document.querySelector('.images-product')) {
	let imagesSubSlider = new Swiper('.images-product__subslider', {
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 0,
		speed: 600,
	});
	let imagesMainSlider = new Swiper('.images-product__mainslider', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 600,
		thumbs: {
			swiper: imagesSubSlider,
		},
	})
}



const iconMenu = document.querySelector(".menu__icon");

if (iconMenu) {
	const menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", e => {
		document.body.classList.toggle("_lock");
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
	})
}

if (isMobile.any()) {
	let menuParents = document.querySelectorAll(".menu-page__parent .menu-page__link");
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener("click", function (e) {
			e.preventDefault();
			menuParent.parentElement.classList.toggle('_active');

		});
	}
} else {
	let menuParents = document.querySelectorAll(".menu-page__parent");
	// const submenuItems = document.querySelectorAll('.submenu-page__item');

	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		// const submenuNumber = parseInt(menuParent.getAttribute("data-item"));
		// const submenuItem = submenuItems[submenuNumber];
		menuParent.addEventListener("mouseenter", e => {
			menuParent.classList.add('_active');
		})
		menuParent.addEventListener("mouseleave", e => {
			menuParent.classList.remove('_active');
		})
	}
}

const menuPageBurger = document.querySelector(".menu-page__burger");
const menuPageBody = document.querySelector(".menu-page__body");
menuPageBody.hidden = true;

menuPageBurger.addEventListener("click", function (e) {
	// menuPageBurger.classList.toggle('_active');
	// _slideToggle(menuPageBody);
	if (!menuPageBody.classList.contains("_slide")) {
		if (!menuPageBurger.classList.contains('_active')) {
			menuPageBody.hidden = true;
		} else {
			menuPageBody.hidden = false;
		}
		_slideToggle(menuPageBody);
		menuPageBurger.classList.toggle("_active");
	}
});


let searchTitle = document.querySelector(".search-page__title");
let categoriesSearch = document.querySelector(".categories-search");

searchTitle.addEventListener("click", function (e) {
	// searchTitle.classList.toggle("_active");
	// _slideToggle(categoriesSearch);
	console.log(searchTitle.nextElementSibling);
	if (!searchTitle.nextElementSibling.classList.contains("_slide")) {
		if (!searchTitle.classList.contains('_active')) {
			searchTitle.nextElementSibling.hidden = true;
		} else {
			searchTitle.nextElementSibling.hidden = false;
		}
		_slideToggle(searchTitle.nextElementSibling);
		searchTitle.classList.toggle("_active");
	}
});

let checkboxCategories = document.querySelectorAll(".categories-search__checkbox");

for (let index = 0; index < checkboxCategories.length; index++) {
	const checkboxCategory = checkboxCategories[index];
	checkboxCategory.addEventListener("change", function (e) {
		checkboxCategory.classList.toggle("_active");

		let checkboxActiveCategories = document.querySelectorAll(".categories-search__checkbox._active");

		if (checkboxActiveCategories.length > 0) {
			searchTitle.classList.add("_categories");
			let searchQuantity = document.querySelector(".search-page__quantity");
			searchQuantity.innerHTML = searchQuantity.getAttribute("data-text") + " " + checkboxActiveCategories.length;
		} else {
			searchTitle.classList.remove("_categories");
		}
	});
}

let priceFilter = document.querySelector('.price-filter__slider');

if (priceFilter) {
	noUiSlider.create(priceFilter, {
		start: [0, 200000],
		connect: true,
		tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
		range: {
			'min': 0,
			'max': 200000
		}
	});
	let priceStart = document.getElementById("price-start");
	let priceEnd = document.getElementById("price-end");


	priceStart.addEventListener("change", setPriceValues);
	priceEnd.addEventListener("change", setPriceValues);

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if (priceStart.value != '') {
			priceStartValue = priceStart.value;
		}
		if (priceEnd.value != '') {
			priceEndValue = priceEnd.value;
		}
		priceFilter.noUiSlider.set([priceStartValue, priceEndValue]);
	}
	if (isMobile.any()) {
		let filterTitle = document.querySelector(".filter__title");
		filterTitle.nextElementSibling.hidden = true;
		filterTitle.addEventListener("click", function (e) {
			if (!filterTitle.nextElementSibling.classList.contains("_slide")) {
				if (!filterTitle.classList.contains('_active')) {
					filterTitle.nextElementSibling.hidden = true;
				} else {
					filterTitle.nextElementSibling.hidden = false;
				}
				_slideToggle(filterTitle.nextElementSibling);
				filterTitle.classList.toggle("_active");
			}
		});
	}
}

let tabsItems = document.querySelectorAll("._tabs-item");

if (tabsItems.length > 0) {
	let tabsBlocks = document.querySelectorAll("._tabs-block");

	for (let index = 0; index < tabsItems.length; index++) {
		const tabsItem = tabsItems[index];
		const tabsBlock = tabsBlocks[index];

		let itemId = tabsItem.getAttribute('href').replace('#', '');

		if (itemId == tabsBlock.id && tabsItem.classList.contains('_active')) {
			tabsBlock.classList.add('_active');
		}

		tabsItem.addEventListener("click", function(e) {
			e.preventDefault();
			
			if (!tabsItem.classList.contains('_active')) {
				itemId = tabsItem.getAttribute('href').replace('#', '');

				tabsItems.forEach(item => {
					item.classList.remove('_active');
				})
	
				tabsBlocks.forEach(block => {
					if (itemId == block.id) {
						block.classList.add('_active');
					} else {
						block.classList.remove('_active');
					}
				}) 
	
				tabsItem.classList.add('_active');
			}
		});
	}
}


function ibg() {

	let ibg = document.querySelectorAll("._ibg");

	for (let index = 0; index < ibg.length; index++) {
		if (ibg[index].querySelector('img')) {
			ibg[index].style.backgroundImage = 'url(' + ibg[index].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();
function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
let spoilersArray = document.querySelectorAll("[data-spoilers]");

if (spoilersArray.length > 0) {
	// Получение обычный спойлеров
	const spoilersRegular = Array.from(spoilersArray).filter(function (item, index, self) {
		return !item.dataset.spoilers.split(",")[0];
	})
	// Инициализация обычных спойлеров
	if (spoilersRegular.length > 0) {
		initSpoilers(spoilersRegular);
	}

	// Получение спойлеров с медиа запросами
	const spoilersMedia = Array.from(spoilersArray).filter(function (item, index, self) {
		return item.dataset.spoilers.split(",")[0];
	})

	// Инициализация спойлеров с медиа запросами
	if (spoilersMedia.length > 0) {
		const breakpointsArray = [];

		spoilersMedia.forEach(item => {
			const params = item.dataset.spoilers;
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		})

		// Получаем уникальные брейкпоинты
		let mediaQueries = breakpointsArray.map(item => {
			return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
		});

		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		})

		// Работаем с каждым брейкпоинтом
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const mediaBreakpoint = paramsArray[1];
			const mediaType = paramsArray[2];
			const matchMedia = window.matchMedia(paramsArray[0]);

			// Объекты с нужными условиями
			const spoilersArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true;
				}
			})
			matchMedia.addEventListener("change", function () {
				initSpoilers(spoilersArray, matchMedia)
			})
			initSpoilers(spoilersArray, matchMedia);
		})
	}

	// Инициализация
	function initSpoilers(spoilersArray, matchMedia = false) {
		spoilersArray.forEach(spoilersBlock => {
			spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock;
			if (matchMedia.matches || !matchMedia) {
				spoilersBlock.classList.add("_init");
				initSpoilerBody(spoilersBlock);
				spoilersBlock.addEventListener("click", setSpoilerAction);
			} else {
				spoilersBlock.classList.remove("_init");
				initSpoilerBody(spoilersBlock, false);
				spoilersBlock.removeEventListener("click", setSpoilerAction);
			}
		})
	}

	// Работа с контентом
	function initSpoilerBody(spoilersBlock, hideSpoilerBody = true) {
		const spoilerTitles = spoilersBlock.querySelectorAll("[data-spoiler]");
		if (spoilerTitles.length > 0) {
			spoilerTitles.forEach(spoilerTitle => {
				if (hideSpoilerBody) {
					spoilerTitle.removeAttribute("tabindex");
					if (!spoilerTitle.classList.contains("_active")) {
						spoilerTitle.nextElementSibling.hidden = true;
					}
				} else {
					spoilerTitle.setAttribute("tabindex", "-1");
					spoilerTitle.nextElementSibling.hidden = false;
				}
			})
		}
	}
	function setSpoilerAction(e) {
		const el = e.target;
		if (el.hasAttribute('data-spoiler') || el.closest('[data-spoiler]')) {
			const spoilerTitle = el.hasAttribute('data-spoiler') ? el : el.closest('[data-spoiler]');
			const spoilersBlock = spoilerTitle.closest('[data-spoilers]');
			const oneSpoiler = spoilersBlock.hasAttribute('data-one-spoiler') ? true : false;
			if (!spoilersBlock.querySelectorAll("._slide").length) {
				if (oneSpoiler && !spoilerTitle.classList.contains("_active")) {
					hideSpoilerBody(spoilersBlock);
				}
				spoilerTitle.classList.toggle("_active");
				_slideToggle(spoilerTitle.nextElementSibling, 500)
			}
			e.preventDefault();
		}
	}
	function hideSpoilerBody(spoilersBlock) {
		const spoilerActiveTitle = spoilersBlock.querySelector('[data-spoiler]._active');
		if (spoilerActiveTitle) {
			spoilerActiveTitle.classList.remove("_active");
			_slideUp(spoilerActiveTitle.nextElementSibling, 500)
		}
	}
}


