export const Footer = () => {
  return (
    <footer className="flex py-10 flex-col gap-8 md:flex-row">
      <div className="flex-1 flex gap-4 flex-col items-center md:items-end">
        <div className="w-72">
          <img alt="official partner SSI" src="images/blueocean.png" />
        </div>
        <div className="flex justify-center md:justify-end gap-4">
          <img
            className="w-36"
            alt="official partner SSI"
            src="images/ssi_divecenter.webp"
          />
          <img
            className="w-36"
            alt="official partner SSI"
            src="images/ssi_diveschool.webp"
          />
        </div>
      </div>
      <div className="flex-initial border-r border-black hidden md:block"></div>
      <div className="flex-1 flex flex-col gap-4 font-inters text-sm text-center md:text-left">
        <h1 className="text-3xl uppercase">Kurabesi Dive School</h1>
        <div>
          <Mail email="info@kurabesidiveschool.com" /> |{" "}
          <WA phone="628115415335" /> | <WA phone="62818942942" />
        </div>
        <div>
          <Site site="https://www.divessi.com/en/divecenter/741174" />
        </div>
        <div className="text-xs mt-8">
          © {new Date().getFullYear()} Kurabesi Dive School. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

const Mail = ({ email }: { email: string }) => {
  return (
    <a
      className="underline"
      href={`mailto:${email}`}
      target="_blank"
      rel="noreferrer"
    >
      {email}
    </a>
  );
};

const WA = ({ phone }: { phone: string }) => {
  return (
    <a
      className="underline"
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
    >
      +{phone}
    </a>
  );
};

const Site = ({ site }: { site: string }) => {
  return (
    <a className="underline" href={site} target="_blank" rel="noreferrer">
      {site}
    </a>
  );
};
