exports.up = async (sql) => {
  await sql`
			CREATE TABLE subscription (
				id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
				active varchar(30) NOT NULL UNIQUE,
				email varchar(30) NOT NULL UNIQUE,
				session_id integer REFERENCES sessions (id),
				UNIQUE (session_id)
			)
		`;
};

exports.down = async (sql) => {
  await sql`
		DROP TABLE subscription
	`;
};