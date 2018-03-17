<? use Bitrix\Main\Page\Asset; ?>
<!DOCTYPE html>
<html lang="en" data-ng-app="site">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><? $APPLICATION->ShowTitle() ?></title>

    <? Asset::getInstance()->addCss(SITE_TEMPLATE_PATH."/content/css/min/style.min.css") ?>

    <?$APPLICATION->ShowHead();?>


</head>
<body >
<?$APPLICATION->ShowPanel();?>

<!--Top-menu-->
<nav>
    <div class="top-menu">

        <!-- <a href="" class="top-menu__menu link link--reset">
            <i class="icon icon-sort"></i>
        </a> -->

        <div class="top-menu__container">
            <div class="container--fluid">
                <div class="grid grid--sm flex flex--middle">
                    <div class="col--xlg-2-10 col--lg-2-10 col--md-2-10 col--xs-4-5">
                        <div class="logo">
                            <span class="logo__img"><a href="/">B</a></span>
                            <p class="logo__text"><a href="/">Bamper.by</a></p>
                            <p class="logo__desc">Личный кабинет</p>
                        </div>
                    </div>
                    <div class="col--xlg-7-10 col--lg-7-10 col--md-7-10 hidden--xs">
                        <!--Menu-->

                        <? $APPLICATION->IncludeComponent('lk:breadcrumbs', '', [])?>

                    </div>
                    <div class="col--xlg-1-10 col--lg-1-10 col--md-1-10 hidden--xs">

                        <? $APPLICATION->IncludeComponent('lk:userinfo', '', [])?>

                    </div>
                    <div class="visible--xs col--xs-1-5 t--r">
                        <a href="javascript:void(0);" class="top-menu__burger">
                            <svg class="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <g>
                                <path d="M491.318,235.318H20.682C9.26,235.318,0,244.577,0,256s9.26,20.682,20.682,20.682h470.636
                                                    c11.423,0,20.682-9.259,20.682-20.682C512,244.578,502.741,235.318,491.318,235.318z" />
                            </g>
                                <g>
                                    <path d="M491.318,78.439H20.682C9.26,78.439,0,87.699,0,99.121c0,11.422,9.26,20.682,20.682,20.682h470.636
                                                    c11.423,0,20.682-9.26,20.682-20.682C512,87.699,502.741,78.439,491.318,78.439z" />
                                </g>
                                <g>
                                    <path d="M491.318,392.197H20.682C9.26,392.197,0,401.456,0,412.879s9.26,20.682,20.682,20.682h470.636
                                                    c11.423,0,20.682-9.259,20.682-20.682S502.741,392.197,491.318,392.197z" />
                                </g>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>

<!--Aside menu-->
<aside>
    <div>
        <nav id="js-aside" class="aside">

            <div id="js-aside-balance" class="aside__balance">

                <? $APPLICATION->IncludeComponent('lk:tarif', '', [])?>

            </div>

            <div id="js-aside-menu" class="aside__menu" >

                <? $APPLICATION->IncludeComponent('lk:menu.left', '', [])?>

            </div>
            <div id="js-aside-footer" class="aside__footer">
                <p class="m--b-sm">
                    <a href="/" class="link link--reset">www.bamper.by</a>
                </p>
                <p class="m--reset">
                    <a href="mailto:info@bamper.by" class="link link--reset">info@bamper.by</a>
                </p>
            </div>
        </nav>

    </div>
</aside>

<!-- Main view -->
<main class="main">
