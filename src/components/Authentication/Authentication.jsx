import React, { useState } from "react"
import useUser from "../../customHooks/useUser"
import Button from "../Button/Button"
import "./Authentication.scss"

const Authentication = ({ setStage, cookie, setPersonalData }) => {
  console.log("cookie", cookie)
  const { loading, register } = useUser()

  const handleAuthenticate = async (cookie) => {
    const res = await register(cookie)
    if (res.msg === "Registered user successfully") {
      await setPersonalData(res.data)
      await setStage(2)
    }
  }

  return (
    <div className="authentication-page">
      {cookie ? <div>Authenticate your LinkedIn account</div> : <div>Please login to LinkedIn to continue</div>}
      {cookie ? (
        <Button
          onClick={() => {
            handleAuthenticate(cookie)
          }}
        >
          {!loading ? "Authenticate" : "Authenticating"}
        </Button>
      ) : (
        <Button disabled={true}>Authenticate</Button>
      )}
    </div>
  )
}

export default Authentication
