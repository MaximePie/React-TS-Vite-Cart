/* eslint-disable no-unused-vars */

const errors = {
  1: {
    title: 'Erreur générique',
    content: 'Il y a eu une erreur',
  },

  2: {
    title: 'Erreur volontaire',
    content: "Il y a eu une erreur, mais cette fois c'est volontaire",
  },

  500: {
    title: 'Erreur longue',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  },
};

// eslint-disable-next-line no-shadow,no-unused-vars
enum Codes {
  // eslint-disable-next-line no-unused-vars
  Default = 1,

  // eslint-disable-next-line no-unused-vars
  Voluntary,

  // eslint-disable-next-line no-unused-vars
  Long = 500,
}

export { Codes, errors };
