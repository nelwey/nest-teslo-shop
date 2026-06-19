import { Injectable, NotFoundException } from '@nestjs/common';

import { resolveProductImagePath } from './helpers';


@Injectable()
export class FilesService {
  
    getStaticProductImage( imageName: string ) {

        const path = resolveProductImagePath(imageName);

        if ( !path ) 
            throw new NotFoundException(`No product found with image ${ imageName }`);

        return path;
    }


}
