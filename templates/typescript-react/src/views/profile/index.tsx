import React from "react"

export const Profile: React.FC = () => {
  const [userName, setUserName] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((user) => {
        setUserName(user.name)
      })
  }, [])

  return (
    <>
      <h1>Welcome to profile</h1>
      {userName === undefined ? <p>User name is loading ...</p> : <p>{userName}</p>}
    </>
  )
}
