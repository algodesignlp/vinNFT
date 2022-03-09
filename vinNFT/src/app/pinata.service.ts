import { Injectable } from '@angular/core';
import { PinataClient } from '@pinata/sdk';

const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('72e2961c5d31e5c5b8d3',
'ae9d0bc66bc448962bdeaca8838b013ff370b84f59c1ba8295c42b6e6f3838e5');


@Injectable({
  providedIn: 'root'
})


export class PinataService {


  constructor(
    
  ) { }

async testPinataAuth(){

  pinata.testAuthentication().then((result: any) => {
    //handle successful authentication here
    console.log(result);
}).catch((err: any) => {
    //handle error here
    console.log(err);
});

}

}

