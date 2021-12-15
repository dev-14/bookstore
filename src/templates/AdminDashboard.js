import React,  { useEffect, useState } from "react";
import axios from "axios";
import AdminNav from "../Navs/AdminNav";

export default function AdminDashboard() {

    return(
        <>
            <AdminNav />
            <div>Welcome Admin</div>
        </>
    );

}