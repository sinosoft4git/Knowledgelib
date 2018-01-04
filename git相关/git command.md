# git
## 常用命令
` git pull origin/某个分支名称 = git fetch + fit merge origin/某个分支名称`
- 配置用户信息
    + git config --global user.name 用户名
    + git config --global user.email 邮箱
- 初始化本地仓库
    + git init
- 初始化`远程`仓库
    + git init --bare
- 把工作目录文件添加到`本地`暂存区
    + git add 文件列表
    + git add *
- 把`本地`暂存区中文件添加到本地仓库
    + git commit -m 备注信息
    + git commit -a -m 备注信息 （-a只能提交已修改的文件，不能提交未跟踪文件）
- 查看当前状态   
   git status          
- git diff查看不同
   + git diff比较的是工作目录与暂存区的区别
   + git diff --cached比较的是暂存区与本地仓库的区别
   + git diff HEAD比较的是工作目录与本地仓库的区别
- add的逆操作
    + git rm --cached 文件列表
- 回滚`本地`修改的内容
    + git checkout 文件列表
    + git checkout . (回滚所有的修改，慎重使用)
- 使用`本地仓库`的快照进行回滚
    + git reset
        * --hard 3种都发生
        * --soft 只回滚快照
        * --mixed (默认参数) 前两个会发生，但不覆盖工作目录
    * 回滚最后一次提交
        - git reset --hard HEAD^（即用提交列表里的第二个版本覆盖最新版本）
    * 回滚所有的工作目录和暂存区内容
        - git reset --hard HEAD
- reset会做三种操作：
  + 回滚快照  用回滚文件覆盖暂存区内容  用回滚文件覆盖工作目录

- 克隆远程仓库的项目
    + git clone 远程仓库地址 项目名称
- 拉取远程的分支(只有先clone过才能拉取)
    + git pull 远程仓库地址 远程分支名称:本地分支名称
- 推送分支到远程仓库
    + git push 远程仓库地址 本地分支名称:远程分支名称
- 添加远程仓库别名
    + git remote add 别名 远程仓库地址
- 删除远程仓库别名
    + git remote remove 别名
- 查看远程仓库别名的详细信息
    + git remote show 别名
- 查看所有别名
    + git remote

## 分支操作
- 创建分支
    + git branch 分支名称
- 切换分支
    + git checkout 分支名称
- 创建并切换分支
    + git checkout -b 分支名称
- 删除本地分支
    + git branch -d 分支名称（如果没有被合并，无法删除）
    + git branch -D 分支名称（强制删除）
- 只查看本地分支
    + git branch
- 只查看远程分支
    + git branch -r
- 查看所有分支
    + git branch -a
- 删除远程分支
    + git push origin :远程分支名称
    + git push origin --delete 远程分支名称
-  保存当前状态
    +  git stash
- 恢复当前状态
    + git stash pop
- 在github上面跑项目就使用git pages,建立一个名为greyfur.github.io的仓库，然后访问该域名即可看到项目运行效果
- ` -u参数是为了首次推到远程仓库后，在此提交直接git push就好，不用再写origin master`
- 推项目到github上
1. 进入项目根目录
2. git init 用于git初始化;
3. git add * 添加将所有文件;（可以指定文件）
4. git remote add origin ****** ***代表github网站上创建好的项目目录地址，此处用意为将本地代码与github网站进行映射关联
5. git commit -m "XXXXX" XXX代表此次提交的备注标题，此步骤为本地提交
6. git push -u origin master 将刚才提交的代码进行推送到github上面，分支为master分支，可以更换其他分支


## 将修改好的项目推到远程(前提是已经commit到了本地的仓库中！)
- 方法一
 1. $ git fetch origin master //从远程的origin仓库的master分支下载代码到本地的origin master
 2. $ git log -p master.. origin/master//比较本地的仓库和远程参考的区别
 3. $ git merge origin/master//把远程下载下来的代码合并到本地仓库，远程的和本地的合并
 4. $ git push //提交成功

- 方法二
 1. $ git fetch origin master:temp //从远程的origin仓库的master分支下载到本地并新建一个分支temp
 2. $ git diff temp//比较master分支和temp分支的不同
 3. $ git merge temp//合并temp分支到master分支
 4. $ git branch -d temp//删除temp
 5. $ git push //提交成功

## git push 的各种版本详解
- $ git push origin 将当前分支推送到origin主机的对应分支，如果当前分支只有一个追踪分支，那么主机名都可以省略。
- $ git push 如果当前分支与多个主机存在追踪关系，那么这个时候-u选项会指定一个默认主机，这样后面就可以不加任何参数使用git push。（默认只推送当前分支   ）
- $ git push -u origin master 上面命令将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了

## usage: git stash list 列举出自己的暂存代码
git stash show 查看stash的详情
git stash drop 丢弃stash
git stash ( pop | apply ) 弹出栈中的stash 
git stash branch stash某个分之 
git stash [save [--patch] 压入栈stash
git stash clear 清空

## 将远程fork过来的项目同步到自己的仓库
1. 把组织里的项目fork到自己本地
2. 把自己 fork 的项目git clone到本地
3. git remote -v以看到当前项目的远程仓库配置（只有自己的远程项目）
4. ` git remote add upstream 原始项目仓库的git地址`在（这是一个命令）
5. 再次git remote -v查看是否已添加好
6. git fetch upstream
7. git merge upstream/master
8. 补充：upstream是远程原始项目的别名，可改。在最后merge的时候会出现冲突，解决了，才能更新并提pull request
 

 

 


