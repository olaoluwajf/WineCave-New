// Photos: Pexels (free to use). Video: Pexels (Kindel Media). Cellar: Unsplash.
export const px=(id,w=1000)=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`
export const photo=(id,w=1800)=>`https://unsplash.com/photos/${id}/download?force=true&w=${w}`
export const media={
 video:'https://videos.pexels.com/video-files/8093235/8093235-hd_1080_1920_30fps.mp4',
 poster:'https://images.pexels.com/videos/8093235/alcohol-alcoholic-drink-anniversary-bar-8093235.jpeg?auto=compress&w=1260&h=750&dpr=1',
 cellar:photo('D9WH_vlxicA'),hero:photo('CsHI7C7zg6Q'),
 pour:px(9941173,1200),ice:px(4959844,1800),
 styles:{Red:px(9170979,900),White:px(3934056,900),'Rosé':px(18878096,900),Sparkling:px(6662509,900)}}
