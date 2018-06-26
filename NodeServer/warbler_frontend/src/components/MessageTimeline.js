import React from "react"
import MessageList from "../containers/MessageList"
import UserAside from "./UserAside"

const MessageTimeline = props => {
  const { profileImageUrl, username, errors, removeError } = props
  return (
    <div className="row">
      <UserAside profileImageUrl={profileImageUrl} username={username} />
      <MessageList errors={errors} removeError={removeError} />
    </div>
  )
}

export default MessageTimeline
