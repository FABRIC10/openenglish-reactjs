import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import { Banner } from '../components/ui/Banner';
import { Cards } from '../components/ui/Cards';
import { Slide } from '../components/ui/Slide';

import { LoveThisPlanet } from '../components/front/LoveThisPlanet';
import { FrontScreen } from '../components/front/HomeScreen';

export const HomeRoutes = () => {
    return (
        <>
            <Navbar />
            <LoveThisPlanet />
            <Banner />
            <Cards />
            <Slide />
        </>
    )
}
