import { UserInterface } from "../../interfaces/Interface";

export default function UserDetail({
  user,
  styles,
}: {
  user: UserInterface;
  styles: any;
}) {
  const {
    id,
    name,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: { lat, lng },
    },
    phone,
    website,
    company,
  } = user;

  return (
    <>
      <div>
        <div>
          <span className={styles.key}>id</span> : <span>{id}</span>
        </div>
        <div>
          <span className={styles.key}>name</span> : <span>{name}</span>
        </div>
        <div>
          <span className={styles.key}>username</span> : <span>{username}</span>
        </div>
        <div>
          <span className={styles.key}>email</span> : <span>{email}</span>
        </div>
        <div>
          <span className={styles.key}>Address :-</span>
          <div className={styles.block}>
            <div>
              <span className={styles.key}>street</span> : <span>{street}</span>
            </div>
            <div>
              <span className={styles.key}>suite</span> : <span>{suite}</span>
            </div>
            <div>
              <span className={styles.key}>city</span> : <span>{city}</span>
            </div>
            <div>
              <span className={styles.key}>zipcode</span> :{" "}
              <span>{zipcode}</span>
            </div>
            <div>
              <span className={styles.key}>geo :-</span>
              <div>
                <div>
                  <span className={styles.key}>lat</span> : <span>{lat}</span>
                </div>
                <div>
                  <span className={styles.key}>lng</span> : <span>{lng}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className={styles.key}>phone</span> : <span>{phone}</span>
        </div>
        <div>
          <span className={styles.key}>website</span> : <span>{website}</span>
        </div>
        <div>
          <span className={styles.key}>company :-</span>
          <div className={styles.block}>
            <div>
              <span className={styles.key}>name</span> :{" "}
              <span>{company.name}</span>
            </div>
            <div>
              <span className={styles.key}>catchPhrase</span> :{" "}
              <span>{company.catchPhrase}</span>
            </div>
            <div>
              <span className={styles.key}>bs</span> : <span>{company.bs}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
