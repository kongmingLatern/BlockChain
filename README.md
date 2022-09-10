# Web3.0 和 区块链

## 1、Web3.0 的概念

1. **去中心化**

2. 大数据以及 Ai 计算

   > 例如：
   >
   > 用户输入了 **苹果**，那么该平台可以通过用户的喜好
   >
   > ​ 在**苹果（水果）**和**苹果手机** 中选择最有可能的符合项目

3. 分布式的

4. 用户信息**完全是自己控制**，对智能合约不满意可以进行投诉，会进行投票等。（**无中间商赚差价**）

[[视频]理解 web3.0](https://www.bilibili.com/video/BV1GU4y1S7Gf/?spm_id_from=333.788.recommend_more_video.3&vd_source=6846de672e632247db5a2cf48e886860)

### 1.1 web3.0 的安全问题

#### 1.1.1 web1.0 的痛点

**平台创造、平台所有、平台控制、平台受益**

#### 1.1.2 web2.0 的痛点

**用户创造、平台所有、平台控制、平台分配**

1. **所有权和收益权不合理：** 不符合 “谁创造、谁拥有、谁收益”的市场规则。比如：我在知乎、公众号等渠道发布的几十篇文章，没有收益。

2. **平台垄断，并控制用户：** 数亿用户创造的海量内容，无偿提供给平台，催生了多个超级巨头的产生。反过来，巨头开始控制用户，比如：

   - 各大内容平台通过算法控制推荐给用户的内容 😡

   - 百度搜索首页全是付费广告 😡

   - 平台割裂，微信屏蔽支付宝、淘宝、抖音分享，淘宝不支持微信支付等 😡

   - 电商平台杀熟 😡

   - 在朋友圈发布的内容，被屏蔽仅自己可见 😡

3. **数据割裂，且无法迁移：** 即使我们对各大平台的控制已经忍无可忍，但我们没有办法去改变。我们的数据归平台所有，无法迁移。另外就是在当前的模式下，很难诞生白莲花平台。

   - 我每次写一篇文章，需要在公众号、掘金、知乎、Github 等各个渠道发布一次。大家对于文章的评论、点赞、关注都是割裂的，属于各个平台，而不是属于我这篇文章

   - 我忍受不了微信的垄断，但我也没办法把微信的好友、聊天记录、朋友圈等我创作的内容迁移到其它平台

   - 我没办法把知乎的粉丝、文章、评论、关注迁移到掘金

   - 我在 QQ 音乐购买的音乐，没法在网易云音乐播放器播放

4. **隐私问题：** 我们的社交关系、聊天记录、购物记录、搜索记录等数据，均由各大平台控制，他们可以随意使用我们的隐私数据

5. **数据可信度：** 平台提供的数据不可信，比如：

   - 我的文章阅读量可能都是虚假的

   - 商品的购买量可能都是虚假的

   - 推荐的热门视频可能并不是真的热门

6. **数据安全性：** 我们的数据由平台中心化存储，如果平台挂了，那我们的数据也没了

#### 1.1.3 web3.0 的痛点

- 个人信息均由密钥操纵，如果密钥丢失，即失去账号【账号唯一，不存在封号】
- 个人隐私信息
- 完全去中心化是否可靠，不可靠言论怎么删除？

举例

**社交关系、聊天记录、实时聊天消息等由我个人管理，微信做的不好，我就炒他鱿鱼，不给他授权了。我把这些信息授权给另外一个体验真正好的聊天工具。**

**我购买的音乐由我个人管理，QQ 音乐让我不爽，我就炒了他，把我的音乐授权给另外一个音乐软件。**

**我写的文章、以及文章的评论、收藏、关注等数据我个人管理，哪个平台体验好，我就授权给他。**

### 1.2 实现思路

1. 用户的数据存储在某个地方，用户对数据拥有完全控制权，**未经授权，任何人不能访问和修改数据。**
2. 软件需要经过用户授权，才能访问用户特定的数据。

## 2、区块链

### 2.1 区块链共识算法

**对于所有的分布式系统而言，一致性都是系统的核心问题**。在区块链中，维持全网节点数据一致性的过程被称为“共识”。

[【视频】大卡论坛，区块链共识算法安全探讨](https://www.bilibili.com/video/BV1bK4y1H74f?spm_id_from=333.337.search-card.all.click&vd_source=6846de672e632247db5a2cf48e886860)

### 2.2 PoW 挖矿

> PoW 挖矿，是每个节点构造区块所必须进行的工作。该工作有一个特点，就是构造该证明需要消耗大量的算力，而验证证明是否真实则非常简单。 PoW 必然导致这样一个结果：算力越大，挖出区块的速度越快。

PoW 就是通过极大地提高“**挖得比大家更快**”的成本来确保网络安全。

PoW 用于确保整个网络只有一个前进方向——算力最强的方向。人多力量大，我们上文中假设了诚实的节点要比恶意节点多得多——虽然诚实节点的算力不一定强，但是在参与者非常多的情况下，我们可以大致认为节点越多算力越强。

因此，小规模的尝试篡改数据的攻击很难成功——如果想要自己节点就能打败大多数节点，就需要让自己节点的算力大于数量占优的诚实节点。当恶意节点的算力超过全网 51%的时候，篡改数据的攻击就能得逞了——这就是所谓的“**51%攻击**”。然而在实际场景下，这样为了攻击网络而准备过半算力产生的成本会**高于回报**，该攻击是得不偿失的。

### 2.3 GHOST

> 最大贪心子树协议

由于时时刻刻网络都在分叉，所以对于网络中的每个节点而言，其自身所维护的区块链结构的最末尾都会成为一棵树，这棵树上延伸出数个子树，这些子树的叶子节点都是合法的下一个区块。 而由于整个区块链网络都要向着最多算力所在的方向前进——使用 PoW 共识机制的区块链系统有一个前提假设，就是“善意的人”应该占所有人中的大多数，那么也就可以假设善意的参与者占有更多的算力。那么既然善意的人加起来的算力总是更大，那么这些参与者在 PoW 机制中算块的速度就会更快。这就意味着这些参与者集中的方向就会以更快的速度产生更多的区块，这些人所在的子树延伸的也就更快更长——因此，我们也就可以认为，区块更多、延伸的更长的方向就是正确的方向，即主链方向。

### 2.4 智能合约安全问题

#### 2.4.1 什么是智能合约

> 一个智能合约就是一段代码，代码的具体功能由开发者设计。这段代码会被以一种名为“合约账户”的方式部署在区块链系统上，之后只需使用一些参数向该合约账户的地址发送交易即可触发这段代码的执行。

由于区块链与生俱来的“价值网络”属性，最适合运行在以太坊网络中的智能合约基本都是与以太币有深入联系的——也就是说，智能合约代码往往都会与“钱”相关，应用往往都涉及到虚拟货币募资以及转移。因此，智能合约的安全问题可以说是区块链应用最核心的问题之一，若智能合约存在漏洞则可能造成极其严重的后果。以太坊历史上最著名的 “The DAO” 事件，便是黑客利用了该项目智能合约代码中的一个递归漏洞，盗走数额巨大的以太币引起的。该漏洞当时威胁到了超过 1.5 亿美元的以太币。这次事件最终也导致以太坊实行硬分叉，原 ETH 分裂为 ETH 和 ETC，该事件也引起了关于“区块链到底应该怎样”的哲学讨论。

**要解决该类问题，需要开发智能合约的项目方在技术方面加强投入，降低产生漏洞的概率。并需要在项目的开发过程中引入有更强技术背景的合约安全审计公司对合约进行充分的检查和测试。**

## 3、Web3.0 与 区块链 的联系

如果 Web3 确定是分布式的，那么区块链简直就是天然的基础设施。因为区块链是分布式数据库的一种实现，本身就是分布式的，而且信息一旦上链，就无法修改。

**这解决了 Web3 的核心问题：不同网站的数据交换。** 不同网站都可以自由读写同一个用户的数据，并且这些数据是可以信赖的，从而保证用户进入另一个网站，就好像进入同一个世界的不同地区。

一旦 Web3 构建于区块链之上，按照区块链的设计，用户需要有一个数字钱包，它是你在虚拟世界的身份证和银行账户。你的身份、财产、消费，都通过这个数字钱包来标识。网站通过数字钱包的 ID，来识别你是谁。

另一方面，有了数字钱包以后，银行和金融也就变成虚拟的了，这让虚拟世界更像现实世界了。

# Web3.0 和 区块链

## 1、Web3.0 的概念

1. **去中心化**

2. 大数据以及 Ai 计算

   > 例如：
   >
   > 用户输入了 **苹果**，那么该平台可以通过用户的喜好
   >
   > ​ 在**苹果（水果）**和**苹果手机** 中选择最有可能的符合项目

3. 分布式的

4. 用户信息**完全是自己控制**，对智能合约不满意可以进行投诉，会进行投票等。（**无中间商赚差价**）

[[视频]理解 web3.0](https://www.bilibili.com/video/BV1GU4y1S7Gf/?spm_id_from=333.788.recommend_more_video.3&vd_source=6846de672e632247db5a2cf48e886860)

### 1.1 web3.0 的安全问题

#### 1.1.1 web1.0 的痛点

**平台创造、平台所有、平台控制、平台受益**

#### 1.1.2 web2.0 的痛点

**用户创造、平台所有、平台控制、平台分配**

1. **所有权和收益权不合理：** 不符合 “谁创造、谁拥有、谁收益”的市场规则。比如：我在知乎、公众号等渠道发布的几十篇文章，没有收益。

2. **平台垄断，并控制用户：** 数亿用户创造的海量内容，无偿提供给平台，催生了多个超级巨头的产生。反过来，巨头开始控制用户，比如：

   - 各大内容平台通过算法控制推荐给用户的内容 😡

   - 百度搜索首页全是付费广告 😡

   - 平台割裂，微信屏蔽支付宝、淘宝、抖音分享，淘宝不支持微信支付等 😡

   - 电商平台杀熟 😡

   - 在朋友圈发布的内容，被屏蔽仅自己可见 😡

3. **数据割裂，且无法迁移：** 即使我们对各大平台的控制已经忍无可忍，但我们没有办法去改变。我们的数据归平台所有，无法迁移。另外就是在当前的模式下，很难诞生白莲花平台。

   - 我每次写一篇文章，需要在公众号、掘金、知乎、Github 等各个渠道发布一次。大家对于文章的评论、点赞、关注都是割裂的，属于各个平台，而不是属于我这篇文章

   - 我忍受不了微信的垄断，但我也没办法把微信的好友、聊天记录、朋友圈等我创作的内容迁移到其它平台

   - 我没办法把知乎的粉丝、文章、评论、关注迁移到掘金

   - 我在 QQ 音乐购买的音乐，没法在网易云音乐播放器播放

4. **隐私问题：** 我们的社交关系、聊天记录、购物记录、搜索记录等数据，均由各大平台控制，他们可以随意使用我们的隐私数据

5. **数据可信度：** 平台提供的数据不可信，比如：

   - 我的文章阅读量可能都是虚假的

   - 商品的购买量可能都是虚假的

   - 推荐的热门视频可能并不是真的热门

6. **数据安全性：** 我们的数据由平台中心化存储，如果平台挂了，那我们的数据也没了

#### 1.1.3 web3.0 的痛点

- 个人信息均由密钥操纵，如果密钥丢失，即失去账号【账号唯一，不存在封号】
- 个人隐私信息
- 完全去中心化是否可靠，不可靠言论怎么删除？

举例

**社交关系、聊天记录、实时聊天消息等由我个人管理，微信做的不好，我就炒他鱿鱼，不给他授权了。我把这些信息授权给另外一个体验真正好的聊天工具。**

**我购买的音乐由我个人管理，QQ 音乐让我不爽，我就炒了他，把我的音乐授权给另外一个音乐软件。**

**我写的文章、以及文章的评论、收藏、关注等数据我个人管理，哪个平台体验好，我就授权给他。**

### 1.2 实现思路

1. 用户的数据存储在某个地方，用户对数据拥有完全控制权，**未经授权，任何人不能访问和修改数据。**
2. 软件需要经过用户授权，才能访问用户特定的数据。

## 2、区块链

### 2.1 区块链共识算法

**对于所有的分布式系统而言，一致性都是系统的核心问题**。在区块链中，维持全网节点数据一致性的过程被称为“共识”。

[【视频】大卡论坛，区块链共识算法安全探讨](https://www.bilibili.com/video/BV1bK4y1H74f?spm_id_from=333.337.search-card.all.click&vd_source=6846de672e632247db5a2cf48e886860)

### 2.2 PoW 挖矿

> PoW 挖矿，是每个节点构造区块所必须进行的工作。该工作有一个特点，就是构造该证明需要消耗大量的算力，而验证证明是否真实则非常简单。 PoW 必然导致这样一个结果：算力越大，挖出区块的速度越快。

PoW 就是通过极大地提高“**挖得比大家更快**”的成本来确保网络安全。

PoW 用于确保整个网络只有一个前进方向——算力最强的方向。人多力量大，我们上文中假设了诚实的节点要比恶意节点多得多——虽然诚实节点的算力不一定强，但是在参与者非常多的情况下，我们可以大致认为节点越多算力越强。

因此，小规模的尝试篡改数据的攻击很难成功——如果想要自己节点就能打败大多数节点，就需要让自己节点的算力大于数量占优的诚实节点。当恶意节点的算力超过全网 51%的时候，篡改数据的攻击就能得逞了——这就是所谓的“**51%攻击**”。然而在实际场景下，这样为了攻击网络而准备过半算力产生的成本会**高于回报**，该攻击是得不偿失的。

### 2.3 GHOST

> 最大贪心子树协议

由于时时刻刻网络都在分叉，所以对于网络中的每个节点而言，其自身所维护的区块链结构的最末尾都会成为一棵树，这棵树上延伸出数个子树，这些子树的叶子节点都是合法的下一个区块。 而由于整个区块链网络都要向着最多算力所在的方向前进——使用 PoW 共识机制的区块链系统有一个前提假设，就是“善意的人”应该占所有人中的大多数，那么也就可以假设善意的参与者占有更多的算力。那么既然善意的人加起来的算力总是更大，那么这些参与者在 PoW 机制中算块的速度就会更快。这就意味着这些参与者集中的方向就会以更快的速度产生更多的区块，这些人所在的子树延伸的也就更快更长——因此，我们也就可以认为，区块更多、延伸的更长的方向就是正确的方向，即主链方向。

### 2.4 智能合约安全问题

#### 2.4.1 什么是智能合约

> 一个智能合约就是一段代码，代码的具体功能由开发者设计。这段代码会被以一种名为“合约账户”的方式部署在区块链系统上，之后只需使用一些参数向该合约账户的地址发送交易即可触发这段代码的执行。

由于区块链与生俱来的“价值网络”属性，最适合运行在以太坊网络中的智能合约基本都是与以太币有深入联系的——也就是说，智能合约代码往往都会与“钱”相关，应用往往都涉及到虚拟货币募资以及转移。因此，智能合约的安全问题可以说是区块链应用最核心的问题之一，若智能合约存在漏洞则可能造成极其严重的后果。以太坊历史上最著名的 “The DAO” 事件，便是黑客利用了该项目智能合约代码中的一个递归漏洞，盗走数额巨大的以太币引起的。该漏洞当时威胁到了超过 1.5 亿美元的以太币。这次事件最终也导致以太坊实行硬分叉，原 ETH 分裂为 ETH 和 ETC，该事件也引起了关于“区块链到底应该怎样”的哲学讨论。

**要解决该类问题，需要开发智能合约的项目方在技术方面加强投入，降低产生漏洞的概率。并需要在项目的开发过程中引入有更强技术背景的合约安全审计公司对合约进行充分的检查和测试。**

## 3、Web3.0 与 区块链 与 元宇宙 的联系

如果 Web3 确定是分布式的，那么区块链简直就是天然的基础设施。因为区块链是分布式数据库的一种实现，本身就是分布式的，而且信息一旦上链，就无法修改。

**这解决了 Web3 的核心问题：不同网站的数据交换。** 不同网站都可以自由读写同一个用户的数据，并且这些数据是可以信赖的，从而保证用户进入另一个网站，就好像进入同一个世界的不同地区。

一旦 Web3 构建于区块链之上，按照区块链的设计，用户需要有一个数字钱包，它是你在虚拟世界的身份证和银行账户。你的身份、财产、消费，都通过这个数字钱包来标识。网站通过数字钱包的 ID，来识别你是谁。

另一方面，有了数字钱包以后，银行和金融也就变成虚拟的了，这让虚拟世界更像现实世界了。
