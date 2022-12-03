const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

//route to get all tags along with associated product information
router.get("/", (req, res) => {
  Tag.findAll({
    include: {
      model: Product,
      attributes: ["product_name"],
    },
  })
    .then((tagData) => res.json(tagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//route to get a specific tag by its id along with associated product information
router.get("/:id", (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: ["product_name"],
    },
  })
    .then((tagData) => res.json(tagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//route to create a new tag, sending the newly created row as a JSON object
router.post("/", (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//route to update a tag by its id value, getting the tag by the id in request params and sending the updated tag as a JSON response
router.put("/:id", (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//route to delete a tag by its id value, getting the tag by the id in the request params and sending the deleted tag as a JSON response
router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
