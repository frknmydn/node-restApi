export default {
  port: 1337,
  origin: 'http://localhost:3001',
  dbUri: "mongodb://localhost:27017/restApi",
  saltWorkFactor: 10,
  DB_CONNECTION: "mongodb+srv://frknmydn:176meydan@cluster0.x6gu5.mongodb.net/?retryWrites=true&w=majority",
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCXzZerpx9qdaelwt1U7NCpWXQK
km1OW4ohDF/7g01xDtYf8Nox9wzhhVQrFD+G4eaJoWxIhJYQTgT4ijMlpjXs07Mc
wktcMX49h6Eoo6ZddOMl380UpivkaO+h80miG4JCFAM0G0pUoeNT8h6L9zHqr/yE
oBRd3RAsqxeCKwKrswIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCXzZerpx9qdaelwt1U7NCpWXQKkm1OW4ohDF/7g01xDtYf8Nox
9wzhhVQrFD+G4eaJoWxIhJYQTgT4ijMlpjXs07McwktcMX49h6Eoo6ZddOMl380U
pivkaO+h80miG4JCFAM0G0pUoeNT8h6L9zHqr/yEoBRd3RAsqxeCKwKrswIDAQAB
AoGASdYpcMewQzMJIVpgF7+8WrL0+3NvkU57KEoBoa+jClviENUw/F6jOEqGvxFx
OOVGIimPJtK+vx2D03Q9HpHy5gfG3Q0hXq8RABfzOkgKOQJYEb/CtkadRo9sqPpw
PtXaFrwYNPevqzUydk5Y4imQN0yycmKPirgWP2GGZj8nAxECQQDMmWI6BkE+8p0H
PszrkpDlAo3p/4oMW4XgoxBbIuHMuzYZi6d6FUvcOjGI88ktTBSMIhwjF5K/lIBU
RXcKjzKJAkEAvfCtHN6oLs22MXp1AZBTSIfLp/8C4nLfW6VMboR+Sw9R5MatTuTI
W4seeBxn1/DU88IhU579maYMX8TFMITNWwJATAPMz9wVD6saFmAJyJhKxxsc2Mx9
YLv8UIqlAAdEt0jy/6i4T45sAeWJE+XnX7H9jFb79znB5vXoe+bXJJAxaQJBAK9P
WeigleiFFBl85kvoMwZp2A4Z8EakMgX7fp0vCwYqgLLAsat0vHzJ3fiMd0g3T8Yg
svPkdjt/qEIocryChqsCQGnInFDk9fC5C8G1Ez2N/p0WztoPDNKfYVDGZ8IRMjEy
rPeH03CIhIoh6QPPg02GKC3VumQxgwOe2wkQ2OgHYLE=
-----END RSA PRIVATE KEY-----`,
PUBLIC_KEY:"LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlHZk1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTkFEQ0JpUUtCZ1FDWHpaZXJweDlxZGFlbHd0MVU3TkNwV1hRSwprbTFPVzRvaERGLzdnMDF4RHRZZjhOb3g5d3poaFZRckZEK0c0ZWFKb1d4SWhKWVFUZ1Q0aWpNbHBqWHMwN01jCndrdGNNWDQ5aDZFb282WmRkT01sMzgwVXBpdmthTytoODBtaUc0SkNGQU0wRzBwVW9lTlQ4aDZMOXpIcXIveUUKb0JSZDNSQXNxeGVDS3dLcnN3SURBUUFCCi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ==",
PRIVATE_KEY: "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlDWEFJQkFBS0JnUUNYelplcnB4OXFkYWVsd3QxVTdOQ3BXWFFLa20xT1c0b2hERi83ZzAxeER0WWY4Tm94Cjl3emhoVlFyRkQrRzRlYUpvV3hJaEpZUVRnVDRpak1scGpYczA3TWN3a3RjTVg0OWg2RW9vNlpkZE9NbDM4MFUKcGl2a2FPK2g4MG1pRzRKQ0ZBTTBHMHBVb2VOVDhoNkw5ekhxci95RW9CUmQzUkFzcXhlQ0t3S3Jzd0lEQVFBQgpBb0dBU2RZcGNNZXdRek1KSVZwZ0Y3KzhXckwwKzNOdmtVNTdLRW9Cb2ErakNsdmlFTlV3L0Y2ak9FcUd2eEZ4Ck9PVkdJaW1QSnRLK3Z4MkQwM1E5SHBIeTVnZkczUTBoWHE4UkFCZnpPa2dLT1FKWUViL0N0a2FkUm85c3FQcHcKUHRYYUZyd1lOUGV2cXpVeWRrNVk0aW1RTjB5eWNtS1BpcmdXUDJHR1pqOG5BeEVDUVFETW1XSTZCa0UrOHAwSApQc3pya3BEbEFvM3AvNG9NVzRYZ294QmJJdUhNdXpZWmk2ZDZGVXZjT2pHSTg4a3RUQlNNSWh3akY1Sy9sSUJVClJYY0tqektKQWtFQXZmQ3RITjZvTHMyMk1YcDFBWkJUU0lmTHAvOEM0bkxmVzZWTWJvUitTdzlSNU1hdFR1VEkKVzRzZWVCeG4xL0RVODhJaFU1NzltYVlNWDhURk1JVE5Xd0pBVEFQTXo5d1ZENnNhRm1BSnlKaEt4eHNjMk14OQpZTHY4VUlxbEFBZEV0MGp5LzZpNFQ0NXNBZVdKRStYblg3SDlqRmI3OXpuQjV2WG9lK2JYSkpBeGFRSkJBSzlQCldlaWdsZWlGRkJsODVrdm9Nd1pwMkE0WjhFYWtNZ1g3ZnAwdkN3WXFnTExBc2F0MHZIekozZmlNZDBnM1Q4WWcKc3ZQa2RqdC9xRUlvY3J5Q2hxc0NRR25JbkZEazlmQzVDOEcxRXoyTi9wMFd6dG9QRE5LZllWREdaOElSTWpFeQpyUGVIMDNDSWhJb2g2UVBQZzAyR0tDM1Z1bVF4Z3dPZTJ3a1EyT2dIWUxFPQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ==",
googleClientId: "235131893151-i4hgnemj6utf1pd0qimpe74qhrl5v23b.apps.googleusercontent.com",
googleClientSecret: "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",
googleOAuthRedirectUrl: "http://localhost:1337/api/sessions/oauth/google",
};