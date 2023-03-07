class DataProjectBuilder {
  constructor() {
    this.title = ''
    this.desc = ''
    this.category = ''
    this.keyname = ''
    this.usedTechnologies = []
    this.images = []
  }
  static make() {
    return new DataProjectBuilder();
  }
  setTitle(title) {
    this.title = title
    return this
  }
  setDesc(desc) {
    this.desc = desc
    return this
  }
  setCategory(category) {
    this.category = category
    return this
  }
  setKeyname(keyname) {
    this.keyname = keyname
    return this
  }
  addUsedTechnology(techs) {
    if (Array.isArray(techs)) {
      this.usedTechnologies = this.usedTechnologies.concat(techs)
    } else {
      this.usedTechnologies.push(techs)
    }
    return this
  }
  addImages(images) {
    if (Array.isArray(images)) {
      this.images = this.images.concat(images)
    } else {
      this.images.push(images)
    }
    return this
  }
  get() {
    return {
      title: this.title,
      category: this.category,
      desc: this.desc,
      keyname: this.keyname,
      usedTechnologies: this.usedTechnologies,
      images: this.images
    }
  }
}

(function ($) {
  'use strict';
  const formURL = "https://script.google.com/macros/s/AKfycbyc23tpeLRuYjkIzm0ltiw6xIkeGQJhShpFsBMu/exec"
  const socialURL = {
    stackoverflow: "https://stackoverflow.com/users/9423091/syahid-nurrohim",
    facebook: "https://www.facebook.com/s.nurrohim/",
    twitter: "https://twitter.com/reallyneedhim",
    linkedin: "https://www.linkedin.com/in/syahid-nurrohim-2b77031b5/",
    github: "https://github.com/syahidnurrohim"
  }
  const projects = [
    DataProjectBuilder.make()
    .setKeyname('sim-aset')
    .setTitle('SIM Aset Daerah')
    .setDesc('Merupakan sistem untuk manajemen aset tetap daerah yang mengakomodir berbagai transaksi barang seperti pengadaan barang, penambahan nilai, pengurangan nilai, reklas, verifikasi hingga mutasi barang antar skpd, selain itu beberapa fitur lain diantaranya penyusutan barang, laporan dan rekap serta integrasi dengan aplikasi keuangan')
    .setCategory('Information System')
    .addUsedTechnology(['JavaScript', 'Laravel', 'Python', 'PostgreSQL'])
    .addImages('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0102ee94-e8d1-4626-b8f4-3fad53cf68a0/WhatsApp_Image_2023-03-07_at_20.04.40_%282%29.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230307T131657Z&X-Amz-Expires=86400&X-Amz-Signature=38580bf2ff186abc199963404bf0f30444822754e298125e25844007b26b9433&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22WhatsApp%2520Image%25202023-03-07%2520at%252020.04.40%2520%282%29.jpeg%22&x-id=GetObject')
    .addImages('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/28ab5a6f-76f7-481b-be79-18912297ac7b/WhatsApp_Image_2023-03-07_at_20.04.40_%281%29.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230307T131921Z&X-Amz-Expires=86400&X-Amz-Signature=5b2c6edc4f34520e5b1c4c1dd0044e0629bf8b3a6c5a4698d3733e074a6d8b52&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22WhatsApp%2520Image%25202023-03-07%2520at%252020.04.40%2520%281%29.jpeg%22&x-id=GetObject')
    .addImages('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/db38aa36-35a5-4a51-b9ee-0795e67ad3a0/WhatsApp_Image_2023-03-07_at_20.04.40.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230307T131959Z&X-Amz-Expires=86400&X-Amz-Signature=61b5fe8259afe36a5b2e06a0726b4319b14eb97faacc2d292ab76b9215f3806a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22WhatsApp%2520Image%25202023-03-07%2520at%252020.04.40.jpeg%22&x-id=GetObject'),
    // Persediaan
    DataProjectBuilder.make()
    .setKeyname('persediaan')
    .setTitle('e-Persediaan')
    .setDesc('Merupakan sistem untuk manajemen persediaan barang daerah selain aset tetap dengan fitur input barang, transaksi penambahan dan pengeluaran barang, mutasi, fifo, laporan dan rekap serta terintegrasi dengan aplikasi keuangan')
    .setCategory('Information System')
    .addUsedTechnology(['JavaScript', 'Code Igniter', 'Python', 'PostgreSQL'])
    .addImages('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/255c6d27-5f6b-43ed-ac1e-e028a6a9c9bf/WhatsApp_Image_2023-03-07_at_20.14.07.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230307T134318Z&X-Amz-Expires=86400&X-Amz-Signature=ea2bd4fbb0ad850ad9bc1f8822d7f236ce77c140919eceb6af1ef4e5810aa3d5&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22WhatsApp%2520Image%25202023-03-07%2520at%252020.14.07.jpeg%22&x-id=GetObject')
    .addImages('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e43e1197-0f56-4d92-be4b-bf1cee813480/WhatsApp_Image_2023-03-07_at_20.14.58.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230307T134343Z&X-Amz-Expires=86400&X-Amz-Signature=c0e523c896157b0e04bf9f5a7ff0057bbf9f732d1e2bf9a2200ec5071dbeb612&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22WhatsApp%2520Image%25202023-03-07%2520at%252020.14.58.jpeg%22&x-id=GetObject'),
    // E-Rapor
    DataProjectBuilder.make()
    .setKeyname('e-rapor')
    .setTitle('E-Rapor')
    .setDesc('Manajemen nilai report siswa dengan fitur penginputan nilai UTS, UAS dan Tugas, dilengkapi dengan perankingan dan laporan nilai siswa')
    .setCategory('Information System')
    .addUsedTechnology(['TypeScript', 'Golang', 'MongoDB'])
    .addImages('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ed4e1445-49a5-4d3f-82b7-93542d7d5853/WhatsApp_Image_2023-03-07_at_20.52.45.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230307T235231Z&X-Amz-Expires=86400&X-Amz-Signature=a828349e13f1f134c706502790159862734e2ddf5903ccc17214518af3b9208f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22WhatsApp%2520Image%25202023-03-07%2520at%252020.52.45.jpeg%22&x-id=GetObject'),
    // Simayapada
    DataProjectBuilder.make()
    .setKeyname('simayapada')
    .setTitle('Simayapada')
    .setDesc('Manajemen data lelang daerah yang diambil dari aplikasi RUP dan LPSE')
    .setCategory('Information System')
    .addUsedTechnology(['JavaScript', 'PHP', 'PostgreSQL'])
  ]

  buildFeaturedProjects(projects)

  $(window).on('load', function () {
    $('.loader').fadeOut(1000);
    var yearStartAsProgrammer = 2018
    var yearsExperience = (new Date).getFullYear() - yearStartAsProgrammer
    $('#years_experience').html((yearsExperience - (yearsExperience % 3)) + '+')
  });

  $(".social-list").each(function (id, e) {
    for (let i = 0; i < e.children.length; i++) {
      const social = e.children[i]
      social.setAttribute("href", socialURL[social.className])
    }
  })

  var navbar = $('.js-navbar:not(.navbar-fixed)');
  navbar.affix({
    offset: {
      top: 50
    }
  });
  navbar.on('affix.bs.affix', function () {
    if (!navbar.hasClass('affix')) {
      navbar.addClass('animated slideInDown');
    }
  });
  navbar.on('affixed-top.bs.affix', function () {
    navbar.removeClass('animated slideInDown');
  });
  $('.nav-mobile-list li a[href="#"]').on('click', function () {
    $(this).closest('li').toggleClass('current');
    $(this).closest('li').children('ul').slideToggle(200);
    return false;
  });
  $('.navbar-toggle').on('click', function () {
    $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
  });
  $('.close-menu, .click-capture').on('click', function () {
    $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
    $('.menu-list ul').slideUp(300);
  });
  if ($('.owl-carousel').length > 0) {
    $(".review-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1
        },
        720: {
          items: 1,
        },
        1280: {
          items: 1
        }
      },
      responsiveRefreshRate: 0,
      nav: true,
      navText: [],
      animateIn: 'fadeIn',
      dots: false
    });
  }
  if ($('.pagepiling').length > 0) {
    $('.pagepiling').pagepiling({
      scrollingSpeed: 280,
      loopBottom: true,
      anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
      afterLoad: function (anchorLink, index) {
        if ($('.pp-section.active').scrollTop() > 0) {
          $('.navbar').removeClass('navbar-white');
        } else {
          $('.navbar').addClass('navbar-white');
        }
      }
    });
    $('.pp-scrollable').on('scroll', function () {
      var scrollTop = $(this).scrollTop();
      if (scrollTop > 0) {
        $('.navbar-2').removeClass('navbar-white');
      } else {
        $('.navbar-2').addClass('navbar-white');
      }
    });
    $('#pp-nav').remove().appendTo('body').addClass('white right-boxed hidden-xs');
    $('.pp-nav-up').on('click', function () {
      $.fn.pagepiling.moveSectionUp();
    });
    $('.pp-nav-down').on('click', function () {
      $.fn.pagepiling.moveSectionDown();
    });
  }
  $('.project-box').on('mouseover', function () {
    var index = $('.project-box').index(this);
    $('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
  });
  if ($('.js-form').length) {
    $('.js-form').each(function () {
      $(this).validate({
        errorClass: 'error wobble-error',
        submitHandler: function (form) {
          $.ajax({
            type: "POST",
            url: formURL,
            data: $(form).serialize(),
            success: function () {
              $('#error').modal('hide');
              $('#success').modal('show');
            },
            error: function () {
              $('#success').modal('hide');
              $('#error').modal('show');
            },

          });
        }
      });
    });
  }
})(jQuery);

function showModalDetailProject(project) {
  var modalElement = $('.modal-detail-project')
  modalElement.modal('show')
  modalElement.find('.project-title').html(project.title)
  modalElement.find('.project-desc').html(project.desc)
  modalElement.find('.project-category span').html(project.category)
  modalElement.find('.project-used-technologies span').html(project.usedTechnologies.join(', '))
  modalElement.find('.project-images').html('<div></div>')
  project.images.forEach(function (image) {
    var innerHTML = `
    <img src='${image}' />
    `
    modalElement.find('.project-images div').append(innerHTML)
  })
  new Viewer(modalElement.find('.project-images div')[0]);
}

function buildFeaturedProjects(projects) {
  var featuredWorksContainer = $('#featured_works')
  featuredWorksContainer.html('')
  projects.forEach(function (project) {
    project = project.get()
    var innerHTML = `
      <div class="col-project-box col-sm-6 col-md-4 col-lg-3">
        <a href="javascript:void(0)" data-project="${project.keyname}" class="project-box">
          <div class="project-box-inner">
            <h5>${project.title}</h5>
            <div class="project-category">${project.category}</div>
          </div>
        </a>
      </div>
    `
    featuredWorksContainer.append(innerHTML)
    featuredWorksContainer.find(`[data-project="${project.keyname}"]`)
      .on('click', {project: project}, function (e) {
        showModalDetailProject(e.data.project)
      })
  })
}
