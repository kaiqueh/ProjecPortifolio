const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const section = document.querySelectorAll('section');
const menuicon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuicon.addEventListener('click', () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const barsbox = document.querySelector('.bars-box');
    const header = document.querySelector('header');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsbox.classList.remove('active');
    setTimeout(() => {
        barsbox.classList.add('active');
    }, 1100);

    section.forEach(section => {
        section.classList.remove('active');
    });

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
        }

        link.classList.add('active');

        setTimeout(() => {
            section[idx].classList.add('active');
        }, 1100);
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');

        setTimeout(() => {
            section[0].classList.add('active');
        }, 1100);
    }
});

const resumeBtns = document.querySelectorAll('.resume-btn');

const resumebutton = document.querySelectorAll(".resume-btn");

resumebutton.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDetails = document.querySelectorAll(".resume_detail");

    resumebutton.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    resumeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    resumeDetails[idx].classList.add("active");
  });
});
const arrowRight = document.querySelector(
  ".portifolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portifolio-box .navigation .arrow-left"
);

let index = 0;

const activePortifolio = () => {
  const imgslide = document.querySelector(".portifolio-box .img-slide");
  const portifolioDetails = document.querySelectorAll(
    ".portifolio-detail"
  );

  portifolioDetails.forEach((detail) => {
    detail.classList.remove("active");
  }
  );
    portifolioDetails[index].classList.add("active");

  imgslide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;
};

arrowRight.addEventListener('click', () => {
    if (index < 2) {
        index++; //o valor de dentro da consicional precisa ser nenor para verificar se tem mais 1 slide
        arrowLeft.classList.remove('disabled'); 
    }
    else {
        index = 3;
        arrowRight.classList.add('disabled');
    }

    activePortifolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortifolio();
});
