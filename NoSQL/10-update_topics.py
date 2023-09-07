#!/usr/bin/env python3
"""
changes all topics of a school document based on the name
"""
from typing import List


def update_topics(mongo_collection, name: str, topics: List):
    """
    function to change topics
    """
    if mongo_collection is None:
        return None
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
