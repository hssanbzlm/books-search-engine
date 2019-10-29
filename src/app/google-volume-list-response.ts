export interface GoogleVolumeListResponse { 
    totalItems:number;
    items: Array<{  
        id:string;
        volumeInfo: {
            title: string;
            subtitle:string;
            description:string;
            pageCount:number;
            authors:Array<string>;
            publishedDate:string;
            categories:Array<string>; 
            imageLinks: { 
                thumbnail :string;

            } 
            language:string;

        } 
    }>;



}
