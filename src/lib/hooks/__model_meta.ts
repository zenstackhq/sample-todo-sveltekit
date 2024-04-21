/* eslint-disable */
const metadata = {
    fields: {
        space: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            createdAt: {
                name: 'createdAt',
                type: 'DateTime',
                attributes: [{ name: '@default', args: [] }],
            },
            updatedAt: {
                name: 'updatedAt',
                type: 'DateTime',
                attributes: [{ name: '@updatedAt', args: [] }],
            },
            name: {
                name: 'name',
                type: 'String',
            },
            slug: {
                name: 'slug',
                type: 'String',
            },
            members: {
                name: 'members',
                type: 'SpaceUser',
                isDataModel: true,
                isArray: true,
                backLink: 'space',
            },
            lists: {
                name: 'lists',
                type: 'List',
                isDataModel: true,
                isArray: true,
                backLink: 'space',
            },
        },
        spaceUser: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            createdAt: {
                name: 'createdAt',
                type: 'DateTime',
                attributes: [{ name: '@default', args: [] }],
            },
            updatedAt: {
                name: 'updatedAt',
                type: 'DateTime',
                attributes: [{ name: '@updatedAt', args: [] }],
            },
            space: {
                name: 'space',
                type: 'Space',
                isDataModel: true,
                backLink: 'members',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'spaceId' },
            },
            spaceId: {
                name: 'spaceId',
                type: 'String',
                isForeignKey: true,
            },
            user: {
                name: 'user',
                type: 'User',
                isDataModel: true,
                backLink: 'spaces',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'userId' },
            },
            userId: {
                name: 'userId',
                type: 'String',
                isForeignKey: true,
            },
            role: {
                name: 'role',
                type: 'SpaceUserRole',
            },
        },
        user: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            email: {
                name: 'email',
                type: 'String',
            },
            password: {
                name: 'password',
                type: 'String',
            },
            name: {
                name: 'name',
                type: 'String',
                isOptional: true,
            },
            spaces: {
                name: 'spaces',
                type: 'SpaceUser',
                isDataModel: true,
                isArray: true,
                backLink: 'user',
            },
            todos: {
                name: 'todos',
                type: 'Todo',
                isDataModel: true,
                isArray: true,
                backLink: 'owner',
            },
            lists: {
                name: 'lists',
                type: 'List',
                isDataModel: true,
                isArray: true,
                backLink: 'owner',
            },
        },
        list: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            createdAt: {
                name: 'createdAt',
                type: 'DateTime',
                attributes: [{ name: '@default', args: [] }],
            },
            updatedAt: {
                name: 'updatedAt',
                type: 'DateTime',
                attributes: [{ name: '@updatedAt', args: [] }],
            },
            space: {
                name: 'space',
                type: 'Space',
                isDataModel: true,
                backLink: 'lists',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'spaceId' },
            },
            spaceId: {
                name: 'spaceId',
                type: 'String',
                isForeignKey: true,
            },
            owner: {
                name: 'owner',
                type: 'User',
                isDataModel: true,
                backLink: 'lists',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'ownerId' },
            },
            ownerId: {
                name: 'ownerId',
                type: 'String',
                isForeignKey: true,
            },
            title: {
                name: 'title',
                type: 'String',
            },
            private: {
                name: 'private',
                type: 'Boolean',
                attributes: [{ name: '@default', args: [{ value: false }] }],
            },
            todos: {
                name: 'todos',
                type: 'Todo',
                isDataModel: true,
                isArray: true,
                backLink: 'list',
            },
        },
        todo: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            createdAt: {
                name: 'createdAt',
                type: 'DateTime',
                attributes: [{ name: '@default', args: [] }],
            },
            updatedAt: {
                name: 'updatedAt',
                type: 'DateTime',
                attributes: [{ name: '@updatedAt', args: [] }],
            },
            owner: {
                name: 'owner',
                type: 'User',
                isDataModel: true,
                backLink: 'todos',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'ownerId' },
            },
            ownerId: {
                name: 'ownerId',
                type: 'String',
                isForeignKey: true,
            },
            list: {
                name: 'list',
                type: 'List',
                isDataModel: true,
                backLink: 'todos',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'listId' },
            },
            listId: {
                name: 'listId',
                type: 'String',
                isForeignKey: true,
            },
            title: {
                name: 'title',
                type: 'String',
            },
            completedAt: {
                name: 'completedAt',
                type: 'DateTime',
                isOptional: true,
            },
        },
    },
    uniqueConstraints: {
        space: {
            id: {
                name: 'id',
                fields: ['id'],
            },
            slug: {
                name: 'slug',
                fields: ['slug'],
            },
        },
        spaceUser: {
            id: {
                name: 'id',
                fields: ['id'],
            },
            userId_spaceId: {
                name: 'userId_spaceId',
                fields: ['userId', 'spaceId'],
            },
        },
        user: {
            id: {
                name: 'id',
                fields: ['id'],
            },
            email: {
                name: 'email',
                fields: ['email'],
            },
        },
        list: {
            id: {
                name: 'id',
                fields: ['id'],
            },
        },
        todo: {
            id: {
                name: 'id',
                fields: ['id'],
            },
        },
    },
    deleteCascade: {
        space: ['SpaceUser', 'List'],
        user: ['SpaceUser', 'List', 'Todo'],
        list: ['Todo'],
    },
    authModel: 'User',
};
export default metadata;
