// Url calls to backend

import axios from "axios";

const baseUrl = "http://localhost:8000";

export const Registeruser = `${baseUrl}/create-user`;
export const Loginuser = `${baseUrl}/login`;
