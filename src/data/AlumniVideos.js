// Thumbnail
import snoberthumb from "../assets/Thumbnails/snober-thumbnail.webp";
import gousiathumb from "../assets/Thumbnails/gousia-thumb.webp";
import irfanthumb from "../assets/Thumbnails/irfan-thumbnail.webp";
import umithumb from "../assets/Thumbnails/umi-lubab-thumbnail.jpeg";
import adleenthumb from "../assets/Thumbnails/adleen-thumbnail.webp";


// Profile picture
import snoberprofile from "../assets/Profile/snober-profile.png";
import gousiaprofile from "../assets/Profile/gousia-profile.png";
import irfanprofile from "../assets/Profile/irfan-profile.png";
import umiprofile from "../assets/Profile/umi-profile.jpeg";
import adleenprofile from "../assets/Profile/adleen-profile.png";

// Videos
import SnoberVideo from "../assets/Videos/Snober-video.mp4";
import GousiaVideo from "../assets/Videos/Gousia-video.mp4";
import IrfanShafiVideo from "../assets/Videos/IrfanShafi-video.mp4";
import UmiLubabVideo from "../assets/Videos/UmiLubab-video.mp4";
import AdleenVideo from "../assets/Videos/Adleen-video.mp4";

const alumniVideos = [
  {
    id: 1,
    slug: "snober-mehraj",
    name: "Snober Mehraj",
    subtitle: "Pursuing Research in Journalism",
    thumbnail: snoberthumb,
    image: snoberprofile,
    video: SnoberVideo,
  },
  {
    id: 2,
    slug: "gousia-hassan",
    name: "Gousia Hassan",
    subtitle: "Pursuing BSc Nursing",
    thumbnail: gousiathumb,
    image: gousiaprofile,
    video: GousiaVideo,
  },
  {
    id: 3,
    slug: "irfan-shafi",
    name: "Irfan Shafi",
    subtitle: "Pursuing MBBS",
    thumbnail: irfanthumb,
    image: irfanprofile,
    video: IrfanShafiVideo,
  },
  {
    id: 4,
    slug: "umi-lubab",
    name: "Umi Lubab",
    subtitle: "Liberal Arts at Krea University",
    thumbnail: umithumb,
    image: umiprofile,
    video: UmiLubabVideo,
  },
  {
    id: 5,
    slug: "adleen-nazir",
    name: "Adleen Nazir",
    subtitle: "Pursuing BSc Anesthesia",
    thumbnail: adleenthumb,
    image: adleenprofile,
    video: AdleenVideo,
  },
];

export default alumniVideos;