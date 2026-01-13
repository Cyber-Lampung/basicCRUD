const createdDateTime = () => {
  // created DateTime now

  const dateTimeNow = () => {
    const date = new Date();

    return new Date(date)
      .toLocaleString("sv-SE", { timeZone: "Asia/Jakarta" })
      .replace("T", "");
  };

  return dateTimeNow;
};

export default createdDateTime;
