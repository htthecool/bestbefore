import './Fontawesome.css';
import FontAwesomes from 'react-fontawesome';
import { Row, Col, Card, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import React from 'react';
class Fontawesome extends React.Component {
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Fontawesome</h4>
                        </Col>
                        <Col sm={6}>
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active> Fontawesome Icon </BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col xl={12}>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <section>
                                    <CardTitle>41 New Icons in 4.7 </CardTitle>

                                    <div className="icon-list-demo row">
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-address-book"></i>fa fa-address-book
                                                {/* <FontAwesomes className='fa fa-address-book' name='address-book'/> */}
                                            {/* <h4><FontAwesome.FaArrowCircleODown/></h4> */}
                                        </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-address-book-o"></i>fa fa-address-book-o
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-address-card"></i>fa fa-address-card
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-address-card-o"></i>fa fa-address-card-o
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-bandcamp"></i>fa fa-bandcamp
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-bath"></i>fa fa-bath
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-bathtub"></i>fa fa-bathtub
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-drivers-license"></i>fa fa-drivers-license
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-drivers-license-o"></i>fa fa-drivers-license-o
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-eercast"></i>fa fa-eercast
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-envelope-open"></i>fa fa-envelope-open
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-envelope-open-o"></i>fa fa-envelope-open-o
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-etsy"></i>fa fa-etsy
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-free-code-camp"></i>fa fa-free-code-camp
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-grav"></i>fa fa-grav
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-handshake-o"></i>fa fa-handshake-o
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-id-badge"></i>fa fa-id-badge
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-id-card"></i>fa fa-id-card
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-id-card-o"></i>fa fa-id-card-o
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-imdb"></i>fa fa-imdb
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-linode"></i> fa fa-linode
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-meetup"></i>fa fa-meetup
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-microchip"></i>fa fa-microchip
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-podcast"></i>fa fa-podcast
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-quora"></i>fa fa-quora
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-ravelry"></i>fa fa-ravelry
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-s15"></i>fa fa-s15
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-shower"></i>fa fa-shower
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-snowflake-o"></i>fa fa-snowflake-o
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-superpowers"></i>fa fa-superpowers
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-telegram"></i>fa fa-telegram
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-thermometer"></i>fa fa-thermometer
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-thermometer-0"></i>fa fa-thermometer-0
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-thermometer-1"></i>fa fa-thermometer-1
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-thermometer-2"></i>fa fa-thermometer-2
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-thermometer-3"></i>fa fa-thermometer-3
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-thermometer-4"></i>fa fa-thermometer-4
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-thermometer-empty"></i>fa fa-thermometer-empty
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-thermometer-full"></i>fa fa-thermometer-full
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-thermometer-half"></i>fa fa-thermometer-half
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-thermometer-quarter"></i>fa fa-thermometer-quarter
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-thermometer-three-quarters"></i>fa fa-thermometer-three-quarters
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-times-rectangle"></i>fa fa-times-rectangle
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-times-rectangle-o"></i>fa fa-times-rectangle-o
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-user-circle"></i>fa fa-user-circle
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-user-circle-o"></i>fa fa-user-circle-o
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-user-o"></i>fa fa-user-o
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-vcard"></i>fa fa-vcard
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-vcard-o"></i>fa fa-vcard-o
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-window-close"></i>fa fa-window-close
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-window-close-o"></i>fa fa-window-close-o
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-window-maximize"></i>fa fa-window-maximize
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-window-minimize"></i>fa fa-window-minimize
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-window-restore"></i>fa fa-window-restore
                                            </Col>
                                        <Col sm={6} md={4} lg={3}>
                                            <i className="fa fa-wpexplorer"></i>fa fa-wpexplorer
                                            </Col>
                                    </div>
                                </section>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <section>
                                    <CardTitle>30 New Icons in 4.6.3 </CardTitle>
                                    <div className="icon-list-demo row">
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-american-sign-language-interpreting"></i>fa fa-american-sign-language-interpreting</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-asl-interpreting"></i>fa fa-asl-interpreting</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-assistive-listening-systems"></i>fa fa-assistive-listening-systems</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-audio-description"></i>fa fa-audio-description</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-blind"></i>fa fa-blind</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-braille"></i>fa fa-braille</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-deaf"></i>fa fa-deaf</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-deafness"></i>fa fa-deafness</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-envira"></i>fa fa-envira</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-first-order"></i>fa fa-first-order</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-gitlab"></i>fa fa-gitlab</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-glide"></i>fa fa-glide</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-glide-g"></i>fa fa-glide-g</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hard-of-hearing"></i>fa fa-hard-of-hearing</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-low-vision"></i>fa fa-low-vision</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-pied-piper"></i>fa fa-pied-piper</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-question-circle-o"></i>fa fa-question-circle-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sign-language"></i>fa fa-sign-language</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-signing"></i>fa fa-signing</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-snapchat"></i>fa fa-snapchat</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-snapchat-ghost"></i>fa fa-snapchat-ghost</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-snapchat-square"></i>fa fa-snapchat-square</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-themeisle"></i>fa fa-themeisle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-universal-access"></i>fa fa-universal-access</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-viadeo"></i>fa fa-viadeo</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-viadeo-square"></i>fa fa-viadeo-square</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-volume-control-phone"></i>fa fa-volume-control-phone</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-wheelchair-alt"></i>fa fa-wheelchair-alt</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-wpbeginner"></i>fa fa-wpbeginner</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-wpforms"></i>fa fa-wpforms</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-yoast"></i>fa fa-yoast</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-font-awesome"></i>fa fa-font-awesome</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-google-plus-official"></i>fa fa-google-plus-official</Col>
                                    </div>
                                </section>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <section>
                                    <CardTitle>20 New Icons in 4.5 </CardTitle>
                                    <div className="icon-list-demo row">
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bluetooth"></i>fa fa-bluetooth</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bluetooth-b"></i>fa fa-bluetooth-b</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-codiepie"></i>fa fa-codiepie</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-credit-card-alt"></i>fa fa-credit-card-alt</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-edge"></i>fa fa-edge</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-fort-awesome"></i>fa fa-fort-awesome</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hashtag"></i>fa fa-hashtag</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-mixcloud"></i>fa fa-mixcloud</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-modx"></i>fa fa-modx</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-pause-circle"></i>fa fa-pause-circle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-pause-circle-o"></i>fa fa-pause-circle-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-percent"></i>fa fa-percent</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-product-hunt"></i>fa fa-product-hunt</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-reddit-alien"></i>fa fa-reddit-alien</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-scribd"></i>fa fa-scribd</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-shopping-bag"></i>fa fa-shopping-bag</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-shopping-basket"></i>fa fa-shopping-basket</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-stop-circle"></i>fa fa-stop-circle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-stop-circle-o"></i>fa fa-stop-circle-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-usb"></i>fa fa-usb</Col>
                                    </div>
                                </section>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <section>
                                    <CardTitle>66 Icons in 4.4 </CardTitle>
                                    <div className="icon-list-demo row">
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-500px"></i>fa fa-500px</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-amazon"></i>fa fa-amazon</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-balance-scale"></i>fa fa-balance-scale</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-battery-0"></i>fa fa-battery-0</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-battery-1"></i> fa fa-battery-1</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-battery-2"></i> fa fa-battery-2</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-battery-3"></i> fa fa-battery-3</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-battery-4"></i> fa fa-battery-4</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-battery-empty"></i> fa fa-battery-empty</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-battery-full"></i> fa fa-battery-full</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-battery-half"></i> fa fa-battery-half</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-battery-quarter"></i> fa fa-battery-quarter</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-battery-three-quarters"></i> fa fa-battery-three-quarters</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-black-tie"></i> fa fa-black-tie</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-calendar-check-o"></i> fa fa-calendar-check-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-calendar-minus-o"></i> fa fa-calendar-minus-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-calendar-plus-o"></i> fa fa-calendar-plus-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-calendar-times-o"></i> fa fa-calendar-times-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cc-diners-club"></i> fa fa-cc-diners-club</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cc-jcb"></i> fa fa-cc-jcb</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-chrome"></i> fa fa-chrome</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-clone"></i> fa fa-clone</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-commenting"></i> fa fa-commenting</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-commenting-o"></i> fa fa-commenting-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-contao"></i> fa fa-contao</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-creative-commons"></i> fa fa-creative-commons</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-expeditedssl"></i> fa fa-expeditedssl</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-firefox"></i> fa fa-firefox</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-fonticons"></i> fa fa-fonticons</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-genderless"></i> fa fa-genderless</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-get-pocket"></i> fa fa-get-pocket</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-gg"></i> fa fa-gg</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-gg-circle"></i> fa fa-gg-circle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hand-grab-o"></i> fa fa-hand-grab-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hand-lizard-o"></i> fa fa-hand-lizard-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hand-paper-o"></i> fa fa-hand-paper-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hand-peace-o"></i> fa fa-hand-peace-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hand-pointer-o"></i> fa fa-hand-pointer-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hand-rock-o"></i> fa fa-hand-rock-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hand-scissors-o"></i> fa fa-hand-scissors-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hand-spock-o"></i> fa fa-hand-spock-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hand-stop-o"></i> fa fa-hand-stop-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hourglass"></i> fa fa-hourglass</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hourglass-1"></i> fa fa-hourglass-1</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hourglass-2"></i> fa fa-hourglass-2</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hourglass-3"></i> fa fa-hourglass-3</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hourglass-end"></i> fa fa-hourglass-end</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hourglass-half"></i> fa fa-hourglass-half</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hourglass-o"></i> fa fa-hourglass-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hourglass-start"></i> fa fa-hourglass-start</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-houzz"></i> fa fa-houzz</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-i-cursor"></i> fa fa-i-cursor</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-industry"></i> fa fa-industry</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-internet-explorer"></i> fa fa-internet-explorer</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-map"></i> fa fa-map</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-map-o"></i> fa fa-map-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-map-pin"></i> fa fa-map-pin</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-map-signs"></i> fa fa-map-signs</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-mouse-pointer"></i> fa fa-mouse-pointer</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-object-group"></i> fa fa-object-group</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-object-ungroup"></i> fa fa-object-ungroup</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-odnoklassniki"></i> fa fa-odnoklassniki</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-odnoklassniki-square"></i> fa fa-odnoklassniki-square</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-opencart"></i> fa fa-opencart</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-opera"></i> fa fa-opera</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-optin-monster"></i> fa fa-optin-monster</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-registered"></i> fa fa-registered</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-safari"></i> fa fa-safari</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sticky-note"></i> fa fa-sticky-note</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sticky-note-o"></i> fa fa-sticky-note-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-television"></i> fa fa-television</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-trademark"></i> fa fa-trademark</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-tripadvisor"></i> fa fa-tripadvisor</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-tv"></i> fa fa-tv</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-vimeo"> </i> fa fa-vimeo</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-wikipedia-w"></i> fa fa-wikipedia-w</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-y-combinator"></i> fa fa-y-combinator</Col>
                                    </div>
                                </section>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <section>
                                    <CardTitle>40 Icons in 4.3 </CardTitle>
                                    <div className="icon-list-demo row">
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bed"></i> fa-bed</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-buysellads"></i> fa-buysellads</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cart-arrow-down"></i> fa-cart-arrow-down</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cart-plus"></i> fa-cart-plus</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-connectdevelop"></i> fa-connectdevelop</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-dashcube"></i> fa-dashcube</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-diamond"></i> fa-diamond</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-facebook-official"></i> fa-facebook-official</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-forumbee "></i> fa-forumbee </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-heartbeat"></i> fa-heartbeat</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bed"></i> fa-bed</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-leanpub"></i> fa-leanpub</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-mars"></i> fa-mars</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-mars-double"></i> fa-mars-double</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-mars-stroke"></i> fa-mars-stroke</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-mars-stroke-h "></i> fa-mars-stroke-h </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-mars-stroke-v"></i> fa-mars-stroke-v</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-medium "></i> fa-medium </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-mercury"></i> fa-mercury</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-motorcycle"></i> fa-motorcycle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-neuter "></i> fa-neuter </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-pinterest-p "></i> fa-pinterest-p </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sellsy"></i> fa-sellsy</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-server"></i> fa-server</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-ship"></i> fa-ship</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-shirtsinbulk"></i> fa-shirtsinbulk</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-simplybuilt"></i> fa-simplybuilt</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-skyatlas"></i> fa-skyatlas</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-street-view"></i> fa-street-view</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-subway"></i> fa-subway</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-train"></i> fa-train</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-transgender"></i> fa-transgender</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-transgender-alt "></i> fa-transgender-alt
                                            </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-user-plus"></i> fa-user-plus
                                            </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-user-secret"></i> fa-user-secret</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-user-times"></i> fa-user-times
                                            </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-venus"></i> fa-venus</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-venus-double"></i> fa-venus-double</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-venus-mars "></i> fa-venus-mars </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-viacoin"></i> fa-viacoin</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-whatsapp"></i> fa-whatsapp</Col>
                                    </div>
                                </section>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <section id="new-icons">
                                    <CardTitle>40 Icons in 4.2</CardTitle>
                                    <div className="icon-list-demo row">
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-angellist"></i> fa-angellist</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-area-chart"></i> fa-area-chart</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-at"></i> fa-at</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bell-slash"></i> fa-bell-slash</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bell-slash-o"></i> fa-bell-slash-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bicycle"></i> fa-bicycle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-binoculars"></i> fa-binoculars</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-birthday-cake"></i> fa-birthday-cake</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bus"></i> fa-bus</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-calculator"></i> fa-calculator</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cc"></i> fa-cc</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cc-amex"></i> fa-cc-amex</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cc-discover"></i> fa-cc-discover</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cc-mastercard"></i> fa-cc-mastercard</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cc-paypal"></i> fa-cc-paypal</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cc-stripe"></i> fa-cc-stripe</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cc-visa"></i> fa-cc-visa</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-copyright"></i> fa-copyright</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-eyedropper"></i> fa-eyedropper</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-futbol-o"></i> fa-futbol-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-google-wallet"></i> fa-google-wallet</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-ils"></i> fa-ils</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-ioxhost"></i> fa-ioxhost</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-lastfm"></i> fa-lastfm</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-lastfm-square"></i> fa-lastfm-square</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-line-chart"></i> fa-line-chart</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-meanpath"></i> fa-meanpath</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-newspaper-o"></i> fa-newspaper-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-paint-brush"></i> fa-paint-brush</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-paypal"></i> fa-paypal</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-pie-chart"></i> fa-pie-chart</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-plug"></i> fa-plug</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-shekel"></i> fa-shekel <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sheqel"></i> fa-sheqel <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-slideshare"></i> fa-slideshare</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-soccer-ball-o"></i> fa-soccer-ball-o <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-toggle-off"></i> fa-toggle-off</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-toggle-on"></i> fa-toggle-on</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-trash"></i> fa-trash</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-tty"></i> fa-tty</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-twitch"></i> fa-twitch</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-wifi"></i> fa-wifi</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-yelp"></i> fa-yelp</Col>
                                    </div>
                                </section>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <section id="web-application">
                                    <CardTitle>Web Application</CardTitle>
                                    <div className="icon-list-demo row">
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-adjust"></i> fa-adjust</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-anchor"></i> fa-anchor</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-archive"></i> fa-archive</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-arrows"></i> fa-arrows</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-arrows-h"></i> fa-arrows-h</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-arrows-v"></i> fa-arrows-v</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-asterisk"></i> fa-asterisk</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-automobile"></i> fa-automobile <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-ban"></i> fa-ban</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bank"></i> fa-bank <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bar-chart-o"></i> fa-bar-chart-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-barcode"></i> fa-barcode</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bars"></i> fa-bars</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-beer"></i> fa-beer</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bell"></i> fa-bell</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bell-o"></i> fa-bell-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bolt"></i> fa-bolt</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bomb"></i> fa-bomb</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-book"></i> fa-book</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bookmark"></i> fa-bookmark</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bookmark-o"></i> fa-bookmark-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-briefcase"></i> fa-briefcase</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bug"></i> fa-bug</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-building"></i> fa-building</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-building-o"></i> fa-building-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bullhorn"></i> fa-bullhorn</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-bullseye"></i> fa-bullseye</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cab"></i> fa-cab <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-calendar"></i> fa-calendar</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-calendar-o"></i> fa-calendar-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-camera"></i> fa-camera</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-camera-retro"></i> fa-camera-retro</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-car"></i> fa-car</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-caret-square-o-down"></i> fa-caret-square-o-down</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-caret-square-o-left"></i> fa-caret-square-o-left</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-caret-square-o-right"></i> fa-caret-square-o-right</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-caret-square-o-up"></i> fa-caret-square-o-up</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-certificate"></i> fa-certificate</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-check"></i> fa-check</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-check-circle"></i> fa-check-circle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-check-circle-o"></i> fa-check-circle-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-check-square"></i> fa-check-square</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-check-square-o"></i> fa-check-square-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-child"></i> fa-child</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-circle"></i> fa-circle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-circle-o"></i> fa-circle-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-circle-o-notch"></i> fa-circle-o-notch</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-circle-thin"></i> fa-circle-thin</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-clock-o"></i> fa-clock-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cloud"></i> fa-cloud</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cloud-download"></i> fa-cloud-download</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cloud-upload"></i> fa-cloud-upload</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-code"></i> fa-code</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-code-fork"></i> fa-code-fork</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-coffee"></i> fa-coffee</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cog"></i> fa-cog</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cogs"></i> fa-cogs</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-comment"></i> fa-comment</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-comment-o"></i> fa-comment-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-comments"></i> fa-comments</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-comments-o"></i> fa-comments-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-compass"></i> fa-compass</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-credit-card"></i> fa-credit-card</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-crop"></i> fa-crop</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-crosshairs"></i> fa-crosshairs</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cube"></i> fa-cube</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cubes"></i> fa-cubes</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-cutlery"></i> fa-cutlery</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-dashboard"></i> fa-dashboard <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-database"></i> fa-database</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-desktop"></i> fa-desktop</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-dot-circle-o"></i> fa-dot-circle-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-download"></i> fa-download</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-edit"></i> fa-edit <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-ellipsis-h"></i> fa-ellipsis-h</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-ellipsis-v"></i> fa-ellipsis-v</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-envelope"></i> fa-envelope</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-envelope-o"></i> fa-envelope-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-envelope-square"></i> fa-envelope-square</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-eraser"></i> fa-eraser</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-exchange"></i> fa-exchange</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-exclamation"></i> fa-exclamation</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-exclamation-circle"></i> fa-exclamation-circle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-exclamation-triangle"></i> fa-exclamation-triangle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-external-link"></i> fa-external-link</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-external-link-square"></i> fa-external-link-square</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-eye"></i> fa-eye</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-eye-slash"></i> fa-eye-slash</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-fax"></i> fa-fax</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-female"></i> fa-female</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-fighter-jet"></i> fa-fighter-jet</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-archive-o"></i> fa-file-archive-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-audio-o"></i> fa-file-audio-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-code-o"></i> fa-file-code-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-excel-o"></i> fa-file-excel-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-image-o"></i> fa-file-image-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-movie-o"></i> fa-file-movie-o <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-pdf-o"></i> fa-file-pdf-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-photo-o"></i> fa-file-photo-o <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-picture-o"></i> fa-file-picture-o <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-powerpoint-o"></i> fa-file-powerpoint-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-sound-o"></i> fa-file-sound-o <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-video-o"></i> fa-file-video-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-word-o"></i> fa-file-word-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-zip-o"></i> fa-file-zip-o <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-film"></i> fa-film</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-filter"></i> fa-filter</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-fire"></i> fa-fire</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-fire-extinguisher"></i> fa-fire-extinguisher</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-flag"></i> fa-flag</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-flag-checkered"></i> fa-flag-checkered</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-flag-o"></i> fa-flag-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-flash"></i> fa-flash <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-flask"></i> fa-flask</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-folder"></i> fa-folder</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-folder-o"></i> fa-folder-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-folder-open"></i> fa-folder-open</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-folder-open-o"></i> fa-folder-open-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-frown-o"></i> fa-frown-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-gamepad"></i> fa-gamepad</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-gavel"></i> fa-gavel</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-gear"></i> fa-gear <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-gears"></i> fa-gears <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-gift"></i> fa-gift</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-glass"></i> fa-glass</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-globe"></i> fa-globe</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-graduation-cap"></i> fa-graduation-cap</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-group"></i> fa-group <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-hdd-o"></i> fa-hdd-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-headphones"></i> fa-headphones</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-heart"></i> fa-heart</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-heart-o"></i> fa-heart-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-history"></i> fa-history</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-home"></i> fa-home</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-image"></i> fa-image <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-inbox"></i> fa-inbox</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-info"></i> fa-info</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-info-circle"></i> fa-info-circle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-institution"></i> fa-institution <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-key"></i> fa-key</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-keyboard-o"></i> fa-keyboard-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-language"></i> fa-language</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-laptop"></i> fa-laptop</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-leaf"></i> fa-leaf</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-legal"></i> fa-legal <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-lemon-o"></i> fa-lemon-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-level-down"></i> fa-level-down</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-level-up"></i> fa-level-up</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-life-bouy"></i> fa-life-bouy <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-life-ring"></i> fa-life-ring</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-life-saver"></i> fa-life-saver <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-lightbulb-o"></i> fa-lightbulb-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-location-arrow"></i> fa-location-arrow</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-lock"></i> fa-lock</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-magic"></i> fa-magic</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-magnet"></i> fa-magnet</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-mail-forward"></i> fa-mail-forward <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-mail-reply"></i> fa-mail-reply <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-mail-reply-all"></i> fa-mail-reply-all <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-male"></i> fa-male</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-map-marker"></i> fa-map-marker</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-meh-o"></i> fa-meh-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-microphone"></i> fa-microphone</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-microphone-slash"></i> fa-microphone-slash</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-minus"></i> fa-minus</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-minus-circle"></i> fa-minus-circle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-minus-square"></i> fa-minus-square</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-minus-square-o"></i> fa-minus-square-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-mobile"></i> fa-mobile</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-mobile-phone"></i> fa-mobile-phone <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-money"></i> fa-money</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-moon-o"></i> fa-moon-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-mortar-board"></i> fa-mortar-board <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-music"></i> fa-music</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-navicon"></i> fa-navicon <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-paper-plane"></i> fa-paper-plane</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-paper-plane-o"></i> fa-paper-plane-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-paw"></i> fa-paw</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-pencil"></i> fa-pencil</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-pencil-square"></i> fa-pencil-square</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-pencil-square-o"></i> fa-pencil-square-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-phone"></i> fa-phone</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-phone-square"></i> fa-phone-square</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-photo"></i> fa-photo <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-picture-o"></i> fa-picture-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-plane"></i> fa-plane</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-plus"></i> fa-plus</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-plus-circle"></i> fa-plus-circle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-plus-square"></i> fa-plus-square</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-plus-square-o"></i> fa-plus-square-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-power-off"></i> fa-power-off</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-print"></i> fa-print</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-puzzle-piece"></i> fa-puzzle-piece</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-qrcode"></i> fa-qrcode</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-question"></i> fa-question</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-question-circle"></i> fa-question-circle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-quote-left"></i> fa-quote-left</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-quote-right"></i> fa-quote-right</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-random"></i> fa-random</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-recycle"></i> fa-recycle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-refresh"></i> fa-refresh</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-reorder"></i> fa-reorder <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-reply"></i> fa-reply</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-reply-all"></i> fa-reply-all</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-retweet"></i> fa-retweet</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-road"></i> fa-road</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-rocket"></i> fa-rocket</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-rss"></i> fa-rss</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-rss-square"></i> fa-rss-square</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-search"></i> fa-search</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-search-minus"></i> fa-search-minus</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-search-plus"></i> fa-search-plus</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-send"></i> fa-send <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-send-o"></i> fa-send-o <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-share"></i> fa-share</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-share-alt"></i> fa-share-alt</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-share-alt-square"></i> fa-share-alt-square</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-share-square"></i> fa-share-square</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-share-square-o"></i> fa-share-square-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-shield"></i> fa-shield</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-shopping-cart"></i> fa-shopping-cart</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sign-in"></i> fa-sign-in</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sign-out"></i> fa-sign-out</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-signal"></i> fa-signal</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sitemap"></i> fa-sitemap</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sliders"></i> fa-sliders</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-smile-o"></i> fa-smile-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sort"></i> fa-sort</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sort-alpha-asc"></i> fa-sort-alpha-asc</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sort-alpha-desc"></i> fa-sort-alpha-desc</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sort-amount-asc"></i> fa-sort-amount-asc</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sort-amount-desc"></i> fa-sort-amount-desc</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sort-asc"></i> fa-sort-asc</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sort-desc"></i> fa-sort-desc</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sort-down"></i> fa-sort-down <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sort-numeric-asc"></i> fa-sort-numeric-asc</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sort-numeric-desc"></i> fa-sort-numeric-desc</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sort-up"></i> fa-sort-up <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-space-shuttle"></i> fa-space-shuttle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-spinner"></i> fa-spinner</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-spoon"></i> fa-spoon</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-square"></i> fa-square</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-square-o"></i> fa-square-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-star"></i> fa-star</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-star-half"></i> fa-star-half</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-star-half-empty"></i> fa-star-half-empty <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-star-half-full"></i> fa-star-half-full <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-star-half-o"></i> fa-star-half-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-star-o"></i> fa-star-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-suitcase"></i> fa-suitcase</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-sun-o"></i> fa-sun-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-support"></i> fa-support <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-tablet"></i> fa-tablet</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-tachometer"></i> fa-tachometer</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-tag"></i> fa-tag</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-tags"></i> fa-tags</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-tasks"></i> fa-tasks</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-taxi"></i> fa-taxi</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-terminal"></i> fa-terminal</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-thumb-tack"></i> fa-thumb-tack</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-thumbs-down"></i> fa-thumbs-down</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-thumbs-o-down"></i> fa-thumbs-o-down</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-thumbs-o-up"></i> fa-thumbs-o-up</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-thumbs-up"></i> fa-thumbs-up</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-ticket"></i> fa-ticket</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-times"></i> fa-times</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-times-circle"></i> fa-times-circle</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-times-circle-o"></i> fa-times-circle-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-tint"></i> fa-tint</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-toggle-down"></i> fa-toggle-down <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-toggle-left"></i> fa-toggle-left <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-toggle-right"></i> fa-toggle-right <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-toggle-up"></i> fa-toggle-up <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-trash-o"></i> fa-trash-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-tree"></i> fa-tree</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-trophy"></i> fa-trophy</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-truck"></i> fa-truck</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-umbrella"></i> fa-umbrella</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-university"></i> fa-university</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-unlock"></i> fa-unlock</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-unlock-alt"></i> fa-unlock-alt</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-unsorted"></i> fa-unsorted <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-upload"></i> fa-upload</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-user"></i> fa-user</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-users"></i> fa-users</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-video-camera"></i> fa-video-camera</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-volume-down"></i> fa-volume-down</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-volume-off"></i> fa-volume-off</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-volume-up"></i> fa-volume-up</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-warning"></i> fa-warning <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-wheelchair"></i> fa-wheelchair</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-wrench"></i> fa-wrench</Col>
                                    </div>
                                </section>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <section id="file-type">
                                    <CardTitle>File Type Icons</CardTitle>
                                    <div className="row icon-list-demo">
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file"></i> fa-file</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-archive-o"></i> fa-file-archive-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-audio-o"></i> fa-file-audio-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-code-o"></i> fa-file-code-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-excel-o"></i> fa-file-excel-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-image-o"></i> fa-file-image-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-movie-o"></i> fa-file-movie-o <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-o"></i> fa-file-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-pdf-o"></i> fa-file-pdf-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-photo-o"></i> fa-file-photo-o <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-picture-o"></i> fa-file-picture-o <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-powerpoint-o"></i> fa-file-powerpoint-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-sound-o"></i> fa-file-sound-o <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-text"></i> fa-file-text</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-text-o"></i> fa-file-text-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-video-o"></i> fa-file-video-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-word-o"></i> fa-file-word-o</Col>
                                        <Col sm={6} md={4} lg={3}><i className="fa fa-file-zip-o"></i> fa-file-zip-o <span className="text-muted">(alias)</span>
                                        </Col>
                                    </div>
                                </section>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <section id="spinner">
                                    <CardTitle>Spinner Icons</CardTitle>
                                    <div className="alert alert-success">
                                        These icons work great with the <code>fa-spin</code> class. Check out the
                                            <a href="" className="alert-link">spinning icons example</a>.
                                        </div>
                                    <Row className=" icon-list-demo">
                                        <Col sm={6} md={4} lg={3} className="mb-10 mt-10"><i className="fa fa-spin fa-circle-o-notch" styles={{ width: 'auto', height: 'auto', lineHeight: '1px', marginRight: '10px' }}></i> fa-circle-o-notch</Col>
                                        <Col sm={6} md={4} lg={3} className="mb-10 mt-10"><i className="fa fa-spin fa-cog" styles={{ width: 'auto', height: 'auto', lineHeight: '1px', marginRight: '10px' }}></i> fa-cog</Col>
                                        <Col sm={6} md={4} lg={3} className="mb-10 mt-10"><i className="fa fa-spin fa-gear" styles={{ width: 'auto', height: 'auto', lineHeight: '1px', marginRight: '10px' }}></i> fa-gear <span className="text-muted">(alias)</span>
                                        </Col>
                                        <Col sm={6} md={4} lg={3} className="mb-10 mt-10"><i className="fa fa-spin fa-refresh" styles={{ width: 'auto', height: 'auto', lineHeight: '1px', marginRight: '10px' }}></i> fa-refresh</Col>
                                        <Col sm={6} md={4} lg={3} className="mb-10 mt-10"><i className="fa fa-spin fa-spinner" styles={{ width: 'auto', height: 'auto', lineHeight: '1px', marginRight: '10px' }}></i> fa-spinner</Col>
                                    </Row>
                                </section>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Fontawesome;