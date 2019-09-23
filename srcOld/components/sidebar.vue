<template>
    <div class="sidebar" id="sidebar">
        <!-- sidebar -->
        <div class="sidebar-inner slimscroll" v-bar="{
    preventParentScroll: true,
    scrollThrottle: 30,
}">
            <div id="sidebar-menu" class="sidebar-menu">
                <ul>
                    <li class="menu-title">Main</li>
                    <li>
                        <router-link to="application-info">
                        <i class="la la-tachometer" aria-hidden="true"></i>
                        Dashboard</router-link>
                    </li>
                    <li>
                        <router-link to="form"><i class="la la-user" aria-hidden="true"></i>Form</router-link>
                    </li>
                    <li>
                        <router-link to="ui-kit"><i class="la la-share-alt" aria-hidden="true"></i>UI Kit</router-link>
                    </li>
                    <li>
                        <router-link to="components"><i class="la la-share-alt" aria-hidden="true"></i>Components</router-link>
                    </li>
                   
                    <li>
                        <a href="calendar.html"><i class="la la-table" aria-hidden="true"></i>Calendar</a>
                    </li>
                    <li>
                        <a href="calendar.html"><i class="la la-calendar" aria-hidden="true"></i> Calendar</a>
                    </li>
                    <li>
                        <a href="calendar.html"><i class="la la-calendar" aria-hidden="true"></i> Calendar</a>
                    </li>
                    <li class="submenu">
                        <a href="#" data-toggle="submenu"><i class="la la-tachometer" aria-hidden="true"></i>First Menu <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled hide">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                    <li class="submenu">
                        <a href="#" data-toggle="submenu"><i class="la la-tachometer" aria-hidden="true"></i>Second Menu <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled hide">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                    <li class="submenu">
                        <a href="#" data-toggle="submenu"><i class="la la-tachometer" aria-hidden="true"></i>Third Menu <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled hide">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                    <li class="submenu">
                        <a href="#" data-toggle="submenu"><i class="la la-tachometer" aria-hidden="true"></i>Third Menu <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled hide">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                    <li class="submenu">
                        <a href="#" data-toggle="submenu"><i class="la la-tachometer" aria-hidden="true"></i>Third Menu <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled hide">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                    <li class="submenu">
                        <a href="#" data-toggle="submenu"><i class="la la-tachometer" aria-hidden="true"></i>Third Menu <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled hide">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                    <li class="submenu">
                        <a href="#" data-toggle="submenu"><i class="la la-tachometer" aria-hidden="true"></i>Third Menu <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled hide">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                    <li class="submenu">
                        <a href="#" data-toggle="submenu"><i class="la la-tachometer" aria-hidden="true"></i>Third Menu <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled hide">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                    <li class="submenu">
                        <a href="#" data-toggle="submenu"><i class="la la-tachometer" aria-hidden="true"></i>Third Menu <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled hide">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                    <li class="submenu">
                        <a href="#" data-toggle="submenu"><i class="la la-tachometer" aria-hidden="true"></i>Third Menu <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled hide">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                    <li class="submenu">
                        <a href="#" data-toggle="submenu"><i class="la la-tachometer" aria-hidden="true"></i>Third Menu <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled hide">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                    <li class="submenu">
                        <a href="#" data-toggle="submenu"><i class="la la-tachometer" aria-hidden="true"></i>Third Menu <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled hide">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                    <li class="submenu">
                        <a href="#" data-toggle="submenu"><i class="la la-tachometer" aria-hidden="true"></i>Third Menu <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled hide">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                    <li class="submenu">
                        <a href="#" data-toggle="submenu"><i class="la la-tachometer" aria-hidden="true"></i>Third Menu <span class="menu-arrow"></span></a>
                        <ul class="list-unstyled hide">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sidebar',
    data() {
        return {
            name: '',
            addressLocations: '',
            designation: '',
            menuList: []
        }
    },
    methods: {

        togglesidebar: function() {
            if (window.matchMedia("(max-width: 700px)").matches) {
                var element3 = document.getElementById("left-sidebar");
                element3.classList.add("active");
                var element4 = document.getElementById("main-content");
                element4.classList.add("active");
            }

        }

    },
    mounted() {


        var dropdown1 = document.querySelectorAll('.submenu');
        var dropdownArray = Array.prototype.slice.call(dropdown1, 0);
        dropdownArray.forEach(function(el) {
            var button = el.querySelector('a[data-toggle="submenu"]'),
                menu1 = el.querySelector('.list-unstyled'),
                arrow = button.querySelector('.menu-arrow');

            button.onclick = function(event) {

                if (!menu1.hasClass('show')) {
                    menu1.classList.add('show');
                    menu1.classList.remove('hide');
                    button.classList.add('subdrop');
                    button.parentElement.parentElement.classList.add('fdssdfd');

                    arrow.classList.add('open');
                    arrow.classList.remove('close');
                    event.preventDefault();
                } else {
                    menu1.classList.remove('show');
                    menu1.classList.add('hide');
                    button.classList.remove('subdrop');
                    arrow.classList.remove('open');
                    arrow.classList.add('close');
                    event.preventDefault();
                }

            };
        })

        Element.prototype.hasClass = function(className) {
            return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
        };

    },
    computed: {}
}
</script>
<style>
.hide {
    display: none;
}

.show {
    display: block;
}

.list-unstyled {
    transition: all .2s ease-in;
}


.vb>.vb-dragger {
    z-index: 5;
    width: 12px;
    right: 0;
}

.vb>.vb-dragger>.vb-dragger-styler {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotate3d(0, 0, 0, 0);
    transform: rotate3d(0, 0, 0, 0);
    -webkit-transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
    transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
    background-color: rgba(48, 121, 244, .1);
    margin: 5px 5px 5px 0;
    border-radius: 20px;
    height: calc(100% - 10px);
    display: block;
}

.vb.vb-scrolling-phantom>.vb-dragger>.vb-dragger-styler {
    background-color: rgba(48, 121, 244, .3);
}

.vb>.vb-dragger:hover>.vb-dragger-styler {
    background-color: rgba(48, 121, 244, .5);
    margin: 0px;
    height: 100%;
}

.vb.vb-dragging>.vb-dragger>.vb-dragger-styler {
    background-color: rgba(48, 121, 244, .5);
    margin: 0px;
    height: 100%;
}

.vb.vb-dragging-phantom>.vb-dragger>.vb-dragger-styler {
    background-color: rgba(48, 121, 244, .5);
}
</style>