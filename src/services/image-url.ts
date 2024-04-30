const getCroppedImageUrl = (url:string) => {
    if(!url) return "";
    
    const target = 'media/';
    const index = url.indexOf(target) + target.length; 
    //refers to index of _ as in "media/_" which is where we want to insert

    return url.slice(0,index) + 'crop/600/400/' + url.slice(index);
}
export default getCroppedImageUrl;