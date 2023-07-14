import './style.css'
import express from "express"
import morgan from "morgan"

// APP
const app = express()
app.use(express.json())

// MIDDLEWARES
app.use(express.json())
app.use(morgan("dev"))


const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");


navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible")
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true)
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay")
});