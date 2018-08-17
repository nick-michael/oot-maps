import dekuBadge from '../images/badges/deku.png';
import deku0 from '../images/maps/deku-B2.jpg';
import deku1 from '../images/maps/deku-B1.jpg';
import deku2 from '../images/maps/deku-1F.jpg';
import deku3 from '../images/maps/deku-2F.jpg';
import deku4 from '../images/maps/deku-3F.jpg';

import dodongoBadge from '../images/badges/dodongo.png';
import dodongo0 from '../images/maps/dodongo-1F.jpg';
import dodongo1 from '../images/maps/dodongo-2F.jpg';

import fireBadge from '../images/badges/fire.png';
import fire0 from '../images/maps/fire-1F.jpg';
import fire1 from '../images/maps/fire-2F.jpg';
import fire2 from '../images/maps/fire-3F.jpg';
import fire3 from '../images/maps/fire-4F.jpg';
import fire4 from '../images/maps/fire-5F.jpg';

import forestBadge from '../images/badges/forest.png';
import forest0 from '../images/maps/forest-B2.jpg';
import forest1 from '../images/maps/forest-B1.jpg';
import forest2 from '../images/maps/forest-1F.jpg';
import forest3 from '../images/maps/forest-2F.jpg';

import iceBadge from '../images/badges/ice.png';
import ice0 from '../images/maps/ice-1F.jpg';

import jabuBadge from '../images/badges/jabu.png';
import jabu0 from '../images/maps/jabu-B1.jpg';
import jabu1 from '../images/maps/jabu-1F.jpg';

import shadowBadge from '../images/badges/shadow.png';
import shadow0 from '../images/maps/shadow-B4.jpg';
import shadow1 from '../images/maps/shadow-B3.jpg';
import shadow2 from '../images/maps/shadow-B2.jpg';
import shadow3 from '../images/maps/shadow-B1.jpg';

import spiritBadge from '../images/badges/spirit.png';
import spirit0 from '../images/maps/spirit-1F.jpg';
import spirit1 from '../images/maps/spirit-2F.jpg';
import spirit2 from '../images/maps/spirit-3F.jpg';
import spirit3 from '../images/maps/spirit-4F.jpg';

import waterBadge from '../images/badges/water.png';
import water0 from '../images/maps/water-B1.jpg';
import water1 from '../images/maps/water-1F.jpg';
import water2 from '../images/maps/water-2F.jpg';
import water3 from '../images/maps/water-3F.jpg';

import wellBadge from '../images/badges/well.png';
import well0 from '../images/maps/well-B3.jpg';
import well1 from '../images/maps/well-B2.jpg';
import well2 from '../images/maps/well-B1.jpg';

export const deku = {
  badge: dekuBadge,
  initialFloor: '1f',
  maps: {
    'b2': deku0,
    'b1': deku1,
    '1f': deku2,
    '2f': deku3,
    '3f': deku4,
  },
};

export const dodongo = {
  badge: dodongoBadge,
  initialFloor: '1f',
  maps: {
    '1f': dodongo0,
    '2f': dodongo1,
  },
};

export const fire = {
  badge: fireBadge,
  initialFloor: '1f',
  maps: {
    '1f': fire0,
    '2f': fire1,
    '3f': fire2,
    '4f': fire3,
    '5f': fire4,
  },
};

export const forest = {
  badge: forestBadge,
  initialFloor: '1f',
  maps: {
    'b2': forest0,
    'b1': forest1,
    '1f': forest2,
    '2f': forest3,
  },
};

export const ice = {
  badge: iceBadge,
  initialFloor: '1f',
  maps: {
    '1f': ice0,
  },
};

export const jabu = {
  badge: jabuBadge,
  initialFloor: '1f',
  maps: {
    'b1': jabu0,
    '1f': jabu1,
  },
};

export const shadow = {
  badge: shadowBadge,
  initialFloor: 'b1',
  maps: {
    'b4': shadow0,
    'b3': shadow1,
    'b2': shadow2,
    'b1': shadow3,
  },
};

export const spirit = {
  badge: spiritBadge,
  initialFloor: '1f',
  maps: {
    '1f': spirit0,
    '2f': spirit1,
    '3f': spirit2,
    '4f': spirit3,
  },
};

export const water = {
  badge: waterBadge,
  initialFloor: '2f',
  maps: {
    'b1': water0,
    '1f': water1,
    '2f': water2,
    '3f': water3,
  },
};

export const well = {
  badge: wellBadge,
  initialFloor: 'b1',
  maps: {
    'b3': well0,
    'b2': well1,
    'b1': well2,
  },
};
