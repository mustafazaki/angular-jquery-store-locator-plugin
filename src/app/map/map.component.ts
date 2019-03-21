import {Component, AfterViewInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import {initStoreLocator} from '../../assets/js/jquery.storelocator';
import GoogleMapsApiLoader from 'google-maps-api-loader';

declare var jQuery: any;


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
    encapsulation: ViewEncapsulation.None


})


export class MapComponent implements AfterViewInit, OnDestroy {
    private storeLocatorInstance;

    ngAfterViewInit() {
        GoogleMapsApiLoader({
            apiKey: 'AIzaSyCfd2PZlTQNjIwB7Mzu3oAiNDzesCZaDLI' // optional
        })
            .then((googleApi) => {
                // console.log(googleApi)
                initStoreLocator(jQuery, window, document);

                this.storeLocatorInstance = jQuery('#bh-sl-map-container').storeLocator({
                    storeLocationData: null,

                });
            });


        //   console.log(jQuery('body').css('background', 'red'));
        // setTimeout(function () {
        //     initStoreLocator(jQuery, window, document)
        //     jQuery('#bh-sl-map-container').storeLocator({
        //         storeLocationData: null,
        //     });
        // }, 3000);


    }


    ngOnDestroy() {
        if (this.storeLocatorInstance) {
            this.destroy();
        }
    }

    private destroy() {
        this.storeLocatorInstance.storeLocator('destroy');
    }
}

