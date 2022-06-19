import React from "react";
import { Route, Routes } from "react-router-dom";
import { AirTightContainers } from "../Components/AirTightContainers";
import { BathroomAccessories } from "../Components/BathroomAccessories";
import { ElectricAppliances } from "../Components/ElectricAppliance";
import { GasLighters } from "../Components/GasLighter";
import { LandingPage } from "../Components/LandingPage";
import { KitchenTools } from "../Components/KitchenTools";
import { PrivateRoute } from "./PrivateRoute";
import { Login } from "../Components/Login";
import { Navbar } from "../Components/Navbar";
import { LogOut } from "../Components/LogOut";
import { Cart } from "../Components/Cart";
import OrderPlaced from "../Components/OrderPlaced";
import { UserStatus } from "../Components/UserStatus";

export const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/kitchentools"
          element={
            <PrivateRoute>
              {" "}
              <KitchenTools />
            </PrivateRoute>
          }
        />
        <Route
          path="/airtightcontainers"
          element={
            <PrivateRoute>
              <AirTightContainers />
            </PrivateRoute>
          }
        />
        <Route
          path="/gaslighters"
          element={
            <PrivateRoute>
              {" "}
              <GasLighters />
            </PrivateRoute>
          }
        />
        <Route
          path="/electricappliance"
          element={
            <PrivateRoute>
              {" "}
              <ElectricAppliances />
            </PrivateRoute>
          }
        />
        <Route
          path="/bathroomaccessories"
          element={
            <PrivateRoute>
              <BathroomAccessories />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/orderplaced"
          element={
            <PrivateRoute>
              <OrderPlaced />
            </PrivateRoute>
          }
        />
        <Route path="/userstatus" element={<UserStatus />} />
      </Routes>
    </div>
  );
};
