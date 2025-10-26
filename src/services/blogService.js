import Blog from "../models/Blog.js";

export function getAll(){
    return Blog.find()
}

export function getOne(blogId){
    return Blog.findById(blogId).populate(['owner', 'followers'])
}

export function getLatest(){
    return Blog.find().sort({_id: -1}).limit(3)
}
export function create(blogData, userId){
    return Blog.create({
        ...blogData,
        owner: userId
    })
}

export async function follow(blogId,userId){
    const blog =  await Blog.findById(blogId)
    if (blog.owner.equals(userId)){
        throw new Error('Owner cannot follow blog')
    }
    blog.followers.push(userId)
    return blog.save()

    // return Blog.findByIdAndUpdate(blogId, {$push: {followers: userId}})
}

export async function remove(blogId,userId){
    const blog = await Blog.findById(blogId)

    if (!blog.owner.equals(userId)){
        throw new Error('Cannot delete if not owner')
    }
    return Blog.findByIdAndDelete(blogId)
}

export function edit(blogId,blogData){
    return Blog.findByIdAndUpdate(blogId, blogData, {runValidators: true})
}

export function getAllByOwner(ownerId){
    return Blog.find({owner: ownerId})
}

export function getAllByFollower(followerId){
    return Blog.find().in('followers', followerId)
}