let renderFullTree = () => {
   console.log("new state");
};

let state = {
    messagesPage: {
        messagesData: [
            {
                id: '1',
                name: 'Ivan Ivanov',
                lastMessageContext: 'Hi, how are you?',
                lastMessageDate: "08.04.2021",
                unreadNum: '2'
            },
            {
                id: '2',
                name: 'Julia Samoylova',
                lastMessageContext: 'What r u doing?',
                lastMessageDate: "08.04.2021",
                unreadNum: '10'
            },
            {id: '3', name: 'Ivan Abramov', lastMessageContext: 'Great', lastMessageDate: "08.04.2021", unreadNum: '4'},
            {
                id: '4',
                name: 'Max Semenov',
                lastMessageContext: 'And you?',
                lastMessageDate: "08.04.2021",
                unreadNum: '1'
            },
            {id: '5', name: 'Petr Petrov', lastMessageContext: 'Me', lastMessageDate: "08.04.2021", unreadNum: '0'}
        ]

    },
    profilePage: {
        postData: [
            {
                name: 'Bodrov Sergey',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, alias animi architecto beatae esse ipsa laborum minima necessitatibus nesciunt nihil odio officia placeat quisquam repellendus rerum sint voluptatum! Commodi dicta dignissimos distinctio earum esse, est eveniet facere iste laboriosam quas repellendus, sit voluptatibus! Adipisci, architecto autem, commodi, consequatur culpa cum itaque laudantium minima nesciunt nobis quas rem sequi veniam? Ad cupiditate deleniti explicabo libero odit? Aut dolor, dolore fugit nihil odio possimus qui quisquam tempora velit? A animi assumenda consequuntur corporis cumque deserunt dolorem eaque enim est excepturi magnam maxime minima molestiae, nisi, odio pariatur possimus provident quibusdam quis quod repudiandae sint totam ut veniam voluptatum? Amet animi, aperiam commodi cum cumque, delectus deleniti dignissimos dolorem enim eum explicabo facilis impedit iste labore laboriosam libero magni maxime minus nemo nihil nisi nulla provident quam quisquam reiciendis sed sint soluta tempora tenetur totam vel veniam vitae voluptatum. Ab accusantium alias amet commodi delectus doloribus eos exercitationem fuga hic inventore itaque laboriosam, molestias neque nostrum nulla odio optio pariatur perspiciatis porro praesentium quae quod rem totam? Aliquam amet, beatae dicta doloribus eaque earum, error, eveniet facilis ipsa ipsum maiores natus nobis obcaecati possimus quaerat quod ratione recusandae repellat sed tempore vel!',
                likes: '280'
            },
            {
                name: 'Bodrov Sergey',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, alias animi architecto beatae esse ipsa laborum minima necessitatibus nesciunt nihil odio officia placeat quisquam repellendus rerum sint voluptatum! Commodi dicta dignissimos distinctio earum esse, est eveniet facere iste laboriosam quas repellendus, sit voluptatibus! Adipisci, architecto autem, commodi, consequatur culpa cum itaque laudantium minima nesciunt nobis quas rem sequi veniam? Ad cupiditate deleniti explicabo libero odit? Aut dolor, dolore fugit nihil odio possimus qui quisquam tempora velit? A animi assumenda consequuntur corporis cumque deserunt dolorem eaque enim est excepturi magnam maxime minima molestiae, nisi, odio pariatur possimus provident quibusdam quis quod repudiandae sint totam ut veniam voluptatum? Amet animi',
                likes: '10'
            },
            {
                name: 'Bodrov Sergey',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, alias animi architecto beatae esse ipsa laborum minima necessitatibus nesciunt nihil odio officia placeat quisquam repellendus rerum sint voluptatum! Commodi dicta dignissimos distinctio earum esse, est eveniet facere iste laboriosam ',
                likes: '40'
            }
        ],
        newPostText: ''
    }
};
export const addNewPost = (content) => {
    state.profilePage.postData.unshift({
        name: 'Bodrov Sergey',
        text: content,
        likes: 0
    });
    renderFullTree(state, addNewPost, changeNewPostTextarea);
}
export const changeNewPostTextarea = (content) => {
    state.profilePage.newPostText = content;
    renderFullTree(state, addNewPost, changeNewPostTextarea);
};
export const subscribe = (observer) => {
    renderFullTree = observer;
};


export default state;